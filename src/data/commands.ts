import { Command } from '../types/Command';

export const commandDatabase: Command[] = [
  // System Management
  {
    task: "show system info",
    command: "system_profiler SPHardwareDataType",
    description: "Displays detailed system hardware information"
  },
  {
    task: "check storage space",
    command: "df -h",
    description: "Shows available disk space in human-readable format"
  },
  {
    task: "show memory usage",
    command: "top -l 1 -s 0 | grep PhysMem",
    description: "Displays current memory usage statistics"
  },
  {
    task: "show cpu info",
    command: "sysctl -n machdep.cpu.brand_string",
    description: "Shows CPU model information"
  },
  {
    task: "show battery status",
    command: "pmset -g batt",
    description: "Displays battery status and power information"
  },

  // Package Management
  {
    task: "install homebrew",
    command: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
    description: "Installs Homebrew package manager"
  },
  {
    task: "update homebrew",
    command: "brew update && brew upgrade",
    description: "Updates Homebrew and all installed packages"
  },
  {
    task: "install application",
    command: "brew install {app_name}",
    description: "Installs an application using Homebrew"
  },
  {
    task: "uninstall application",
    command: "brew uninstall {app_name}",
    description: "Removes an application installed via Homebrew"
  },

  // File Operations
  {
    task: "list files",
    command: "ls -la",
    description: "Lists all files including hidden ones with detailed information"
  },
  {
    task: "find file",
    command: "find . -name '{filename}'",
    description: "Searches for files by name in current directory and subdirectories"
  },
  {
    task: "search file content",
    command: "grep -r '{search_term}' .",
    description: "Searches for text within files in current directory and subdirectories"
  },
  {
    task: "change directory",
    command: "cd {directory_path}",
    description: "Changes current directory"
  },
  {
    task: "create directory",
    command: "mkdir -p {directory_name}",
    description: "Creates a new directory (including parent directories if needed)"
  },
  {
    task: "remove file",
    command: "rm {file_name}",
    description: "Removes a file"
  },
  {
    task: "remove directory",
    command: "rm -rf {directory_name}",
    description: "Removes a directory and its contents"
  },
  {
    task: "copy file",
    command: "cp {source} {destination}",
    description: "Copies a file from source to destination"
  },
  {
    task: "move file",
    command: "mv {source} {destination}",
    description: "Moves or renames a file"
  },

  // Network
  {
    task: "show ip address",
    command: "ifconfig | grep 'inet '",
    description: "Displays all IP addresses for network interfaces"
  },
  {
    task: "test internet connection",
    command: "ping -c 4 google.com",
    description: "Tests internet connectivity by pinging Google"
  },
  {
    task: "show wifi networks",
    command: "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -s",
    description: "Lists available WiFi networks"
  },
  {
    task: "show network ports",
    command: "lsof -i -P | grep LISTEN",
    description: "Shows all open network ports and listening services"
  },

  // Development Tools
  {
    task: "install git",
    command: "brew install git",
    description: "Installs Git version control system"
  },
  {
    task: "install node",
    command: "brew install node",
    description: "Installs Node.js and npm"
  },
  {
    task: "install python",
    command: "brew install python",
    description: "Installs Python 3"
  },
  {
    task: "install vscode",
    command: "brew install --cask visual-studio-code",
    description: "Installs Visual Studio Code editor"
  },

  // System Maintenance
  {
    task: "clear dns cache",
    command: "sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder",
    description: "Clears DNS cache to resolve network issues"
  },
  {
    task: "repair disk permissions",
    command: "sudo diskutil repairPermissions /",
    description: "Repairs disk permissions"
  },
  {
    task: "show hidden files",
    command: "defaults write com.apple.finder AppleShowAllFiles YES && killall Finder",
    description: "Shows hidden files in Finder"
  },
  {
    task: "hide hidden files",
    command: "defaults write com.apple.finder AppleShowAllFiles NO && killall Finder",
    description: "Hides hidden files in Finder"
  },

  // Performance & Monitoring
  {
    task: "show running processes",
    command: "ps aux",
    description: "Lists all running processes with detailed information"
  },
  {
    task: "kill process",
    command: "kill -9 {process_id}",
    description: "Force quits a process using its ID"
  },
  {
    task: "monitor system",
    command: "top",
    description: "Shows real-time system statistics and processes"
  }
];