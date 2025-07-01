#!/bin/sh

# Exit on any error
set -e

echo "🚀 Starting frontend development server..."

# Function to check if package.json has changed
check_packages() {
    if [ -f "package.json" ]; then
        # Always check if node_modules exists and has all packages
        if [ ! -d "node_modules" ]; then
            echo "📦 Node modules not found, installing dependencies..."
            npm install
            touch node_modules/.install-timestamp
        elif [ -f "package-lock.json" ] && ([ "package.json" -nt "node_modules/.install-timestamp" ] || [ "package-lock.json" -nt "node_modules/.install-timestamp" ]); then
            echo "📦 Package files changed, reinstalling dependencies..."
            npm ci
            touch node_modules/.install-timestamp
        elif [ ! -f "node_modules/.install-timestamp" ]; then
            echo "📦 Ensuring all dependencies are installed..."
            npm install
            touch node_modules/.install-timestamp
        else
            echo "✅ Dependencies are up to date"
        fi
    else
        echo "❌ Package.json not found!"
        exit 1
    fi
}

# Install/update dependencies
check_packages

# Watch for package.json changes in background
watch_packages() {
    while true; do
        sleep 10
        if [ -f "package.json" ] && [ -f "node_modules/.install-timestamp" ]; then
            if [ "package.json" -nt "node_modules/.install-timestamp" ] || ([ -f "package-lock.json" ] && [ "package-lock.json" -nt "node_modules/.install-timestamp" ]); then
                echo "🔄 Detected package changes, updating dependencies..."
                if [ -f "package-lock.json" ]; then
                    npm ci
                else
                    npm install
                fi
                touch node_modules/.install-timestamp
                echo "✅ Dependencies updated successfully"
            fi
        fi
    done
}

# Start package watcher in background
watch_packages &

# Start development server
echo "🔥 Starting Vite dev server..."
exec npm run dev -- --host 0.0.0.0 --port 5173 