export interface Pokemon {
  num: number;
  name: string;
   variations:[{
     name: string;
     description: string;
   types: string;
   }]
   specie: string;
   height: number;
   weight: number;
   abilities: [] | string;
   stats: {
     total: number;
     hp: number;
     attack: number;
     defense: number;
     speedAttack: number;
     speedDefense: number;
     speed: number;
   }
   evolutions: [] | string;
}
