# https://just.systems/man/en/settings.html?highlight=set%20export#settings
set export                    # Export all variables as environment variables.
set dotenv-load               # Error if a .env file isn't found.
set unstable                  # Enable unstable features

@_default:
    just --list --unsorted

# Frontend development server
@front:
    docker compose -f deployment/frontend/dev/compose.yml up --build
