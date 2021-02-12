import { Module, HttpModule, CacheModule, CacheInterceptor } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import {PokemonController} from './pokemon.controller';
import {PokemonService} from './pokemon.service';

@Module({
	imports: [
	  CacheModule.register({
	    ttl: 60, // Cached files Time To Live
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
