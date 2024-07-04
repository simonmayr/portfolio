#!/bin/bash

PROJECT_NAME="portfolio"

SSH_USER="portfolio"
SSH_HOST="49.13.194.72"
SSH_PORT="22"

# The environment directories
env_dir="/home/$SSH_USER/live/prod"
env_name="production"

START_TIME=$(date +%s)

# Get the command name from the first argument
cmd_name="$1"

styled_echo() {
  local message="$1"
  local green="\033[1m\033[32m"
  local cyan="\033[46m"
  local lightblue="\033[100m"
  local reset="\033[0m"

  echo -e "\n${green}$message${reset} ${lightblue} $HOSTNAME ${reset} ${cyan} $env_name ${reset}"
}

done_echo() {
  END_TIME=$(date +%s)
  DIFF_TIME=$((END_TIME - START_TIME))

  MINUTES=$((DIFF_TIME / 60))
  SECONDS=$((DIFF_TIME % 60))

  echo -e "\033[42m Done \033[0m in $([ $MINUTES -gt 0 ] && echo "${MINUTES}m ")${SECONDS}s"
}

deploy() {
  styled_echo "Deploy started"
  ssh $SSH_USER@$SSH_HOST -p$SSH_PORT "cd $env_dir && git pull && docker compose up --build -d"
}

# Determine which directory to look for the .env file in
if [[ "$cmd_name" == "deploy" ]]; then
  deploy
  done_echo
else
    echo "Invalid command name. Please specify 'deploy'"
    exit 1
fi


