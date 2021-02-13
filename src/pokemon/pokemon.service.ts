import { Injectable, HttpService, Logger } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class PokemonService {
  private readonly logger = new Logger(PokemonService.name);
  
  constructor(private readonly httpService: HttpService){}

  /**
   * Return pokemon given its pokedex ID
   **/
  find(id: string) {
    return this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).pipe(
      map(response => {
        this.logger.debug('Parsing PokeAPI data from response...');
        return response['data'];
      }),
    )
  }
}
