import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function seed() {
	await prisma.$transaction(async (prisma) => {
		// Define regions
		const regions = [
			'EU_EAST',
			'EU_WEST',
			'US_EAST',
			'US_WEST',
			'ASIA_SOUTH',
			'ASIA_EAST',
			'AFRICA_NORTH',
			'AFRICA_SOUTH',
			'AUSTRALIA',
			'SOUTH_AMERICA',
		];

		// Clear existing data
		await prisma.user.deleteMany();
		await prisma.workSpace.deleteMany();
		await prisma.region.deleteMany();

		// Seed regions
		await prisma.region.createMany({
			data: regions.map((name) => ({ name })),
		});

		// Fetch region names
		const regionRecords = await prisma.region.findMany();
		const regionIds = regionRecords.map((region) => region.id);

		console.log('Regions:', regionRecords);

		// Define team names
		const teamNames = [
			'Backend Engineers',
			'Frontend Wizards',
			'QA Masters',
			'DevOps Gurus',
			'Data Scientists',
			'Product Designers',
			'AI Innovators',
			'Security Experts',
			'Tech Support',
			'Customer Success'
		];

		// Create workspaces
		const workspacesData = teamNames.map((teamName) => ({
			name: `${teamName}`,
			active: faker.datatype.boolean(),
		}));

		await prisma.workSpace.createMany({ data: workspacesData });

		// Fetch workspace IDs
		const workspaceRecords = await prisma.workSpace.findMany();
		const workspaceIds = workspaceRecords.map((workspace) => workspace.id);

		console.log('Workspaces:', workspaceRecords);

		// Create random users
		const usersData = Array.from({ length: 500 }).map(() => ({
			name: faker.person.fullName(),
			email: faker.internet.email(),
			role: faker.helpers.arrayElement(['USER', 'ADMIN']),
			active: faker.datatype.boolean(),
			online: faker.datatype.boolean(),
			regionId: faker.helpers.arrayElement(regionIds),
		}));

		await prisma.user.createMany({ data: usersData });

		// Fetch user IDs
		const userRecords = await prisma.user.findMany();
		const userIds = userRecords.map((user) => user.id);

		console.log('Users:', userRecords);

		// Assign workspaces to users
		for (const userId of userIds) {
			const numWorkspaces = faker.number.int({ min: 1, max: 3 });
			const assignedWorkspaces = faker.helpers.arrayElements(workspaceIds, numWorkspaces);
			await prisma.user.update({
				where: { id: userId },
				data: {
					workSpaces: {
						connect: assignedWorkspaces.map((workspaceId) => ({
							id: workspaceId,
						})),
					},
				},
			});
		}

		console.log('Seeding completed!');
	});
}
//run seed 
seed()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
