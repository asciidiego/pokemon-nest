import { Injectable, HttpService, Logger } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class PokemonService {
  private readonly logger = new Logger(PokemonService.name);
  private readonly store = {
    1: {}
  };
  private http;

  constructor(private readonly httpService: HttpService){
    this.http = httpService;
  }

  /**
   * Return pokemon given its pokedex ID
   **/
  find(id: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).pipe(
      map(response => {
        this.logger.debug('Parsing PokeAPI data from response...');
        return response['data'];
      }),
    )
  }

  onModuleInit() {
    this.logger.log('Initializing pokedex store...');
  }
}
