import { Module, HttpModule } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [PokemonModule],
})
export class AppModule {}
