import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  root() {
    return `<html>
<body>
  <p>Perform a GET request at /pokemon/{id} to get a pokemon by its Pokedex ID.</p>
</body>
</html>`;
  }

  @Get(':id')
  getById(@Param() params) {
    const { id } = params;
    return this.pokemonService.find(id);
  }
}
