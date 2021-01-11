import { Api } from '.';
import { Ability } from './ability.model';
import { GameIndex } from './game-index.model';
import { Sprite } from './sprite.model';

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Api;
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  species: Api;
  sprites: Sprite;
  stats: any[];
  type_1: string;
  type_2: string;
  weight: number;
  image: string;
  color: string | null;
  types: any[];
}
