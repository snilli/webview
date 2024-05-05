import { Test, TestingModule } from '@nestjs/testing'
import { beforeEach, describe, expect, it } from 'vitest'
import { jsonPath } from './fs.constant'
import { FsService } from './fs.service'

describe('FsService', () => {
	let service: FsService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				{
					provide: jsonPath,
					useFactory() {
						return new FsService(jsonPath)
					},
				},
			],
		}).compile()

		service = module.get<FsService>(jsonPath)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})
})
