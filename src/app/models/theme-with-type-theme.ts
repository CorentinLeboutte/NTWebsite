export class ThemeWithTypeTheme {
    public  ThemeID : number;

    public Nom : string ;

    public Description:  string ;

    public HeureOuverture : Date ;

    public HeureFermeture : Date ;

    public LienSiteWeb :string ;

    public AdresseID : number;

    public TypeTheme : TypeTheme ;

    public TypeDePaiement : string;

    public PrixMin: number;

    public  PrixMax : number;
}

export class TypeTheme {
    public TypeThemeID : number;

    public  Nom : string ;

}