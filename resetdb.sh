# Remove existing migration files
rm -rf prisma/migrations

# Delete the SQLite database file
rm dev.db

# Reset Prisma migrations
npx prisma migrate reset --force --skip-generate

# Generate a new initial migration
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate
