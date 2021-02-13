import { Module, HttpModule, CacheModule, CacheInterceptor } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import {PokemonController} from './pokemon.controller';
import {PokemonService} from './pokemon.service';

@Module({
	imports: [
	  CacheModule.register({
	    ttl: 60, // Cache requests for 1 minute to be fair and avoid 'disturbing' external APIs
	  }),
	  HttpModule
	],
	controllers: [PokemonController],
	providers: [
	  PokemonService,
	  {
	    provide: APP_INTERCEPTOR,
	    useClass: CacheInterceptor
	  }
	],
})
export class PokemonModule {}
