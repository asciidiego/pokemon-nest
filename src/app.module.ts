import { 
    Module,
    HttpModule,
    Get,
    Controller 
} from '@nestjs/common';

import { PokemonModule } from './pokemon/pokemon.module';

const indexHTML = `
<html>
<body>
  <p>Hello, this might be one of the first [nest.js] apps to ever be hosted on repl.it; and it's about pokemons!</p>
  <p>append a pokedex id to the URL like this to ask for information in JSON format</p>
  <code>
    curl https://pokemon-nest.m4r4c00ch0.repl.co/pokemon/1
  </code>
</body>
</html>
`
@Controller()
export class AppController {
    @Get()
    index() {
        return indexHTML;
    }
}

@Module({
  controllers: [AppController],
  imports: [PokemonModule],
})
export class AppModule {}
