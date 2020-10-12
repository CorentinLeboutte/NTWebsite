export class ThemeWithTypeTheme {
    public  themeID : number;

    public nom : string ;

    public description:  string ;

    public heureOuverture : Date ;

    public heureFermeture : Date ;

    public lienSiteWeb :string ;

    public adresseID : number;

    public typeTheme : TypeTheme ;

    public typeDePaiement : string;

    public prixMin: number;

    public prixMax : number;
}

export class TypeTheme {

    public typeThemeID : number;

    public  nom : string ;

}