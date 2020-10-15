import { from } from 'rxjs';
import { Adresse } from './adresse';
import { TypeTheme } from './theme-with-type-theme'

export class ThemeDetailed {

    public themeID: number;

    public nom: string;

    public image: string;

    public description: string;

    public heureOuverture: Date;

    public heureFermeture: Date;

    public lienSiteWeb: string;

    public adresseID: number;

    public typeTheme: TypeTheme;

    public typeDePaiement: string;

    public prixMin: number;

    public prixMax: number;

    public adresse: Adresse;
}
