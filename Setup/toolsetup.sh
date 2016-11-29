#!/bin/bash
#Install necessary tools, such as
#ansible, git
#-------------------------------
OS=$(uname)
echo "You are on ${OS}"
#-------------------------------
command_exists () {
   type "$1" &> /dev/null ;
}
#-------------------------------
if command_exists git; then
   echo "git !"
else
   echo "no git !"
fi
