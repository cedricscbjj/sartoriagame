class LookImage {
    constructor(src, isClasse, hasModal = false, modalText = "") {
      this.src = src;
      this.isClasse = isClasse; // true = classe, false = pas classe
      this.hasModal = hasModal;
      this.modalText = modalText;
    }
  }
  
  const allImages = [
    new LookImage("image1.jpg", true, true, "Ne vous attendez jamais à entendre les partis dits verts faire l’éloge d’une écologie de la consommation éclairée, fondée sur le discernement, la durabilité et le goût du beau. Jamais il ne leur viendrait à l’esprit de promouvoir l’acquisition de vêtements confectionnés proprement, ni d’encourager à franchir la porte d’un tailleur pour soutenir une industrie locale exigeante et peu polluante"),
    new LookImage("image2.jpg", false, true, "Il est devenu de bon ton, n'est-ce pas, de clamer haut et fort qu'il faut sauver la planète, secourir une jeunesse apparemment perdue et réformer nos habitudes de consommation ! Mais pourquoi, alors, ne pas proposer une vraie solution ? Pourquoi ne pas inculquer et promouvoir l’art sartorial, ce savoir-faire vestimentaire classique, dans nos sociétés occidentales ? L'art du vêtement qui ne se contente pas de flatter l'éphémère, mais qui privilégie les matières nobles et durables, soutient les petites mains locales et fait renaître l'artisanat dans sa forme la plus pure et la plus exquise.Voilà, sans doute, une alternative à la catastrophe qu’est la fast fashion"),
    new LookImage("image3.jpg", true, true, "Soyons honnêtes, ne jouons pas les hypocrites au revers trop sage : il est une forme d’obsession qui naît inévitablement lorsqu’on pénètre dans les arcanes du sartorialisme. Une douce pathologie, une passion textile qui confine au mysticisme, une quête de l’absolu camouflée sous les oripeaux d’un blazer à rayures tennis.Cela commence souvent par une épaule napolitaine, se poursuit avec un revers généreux, et finit en apothéose dans une salle obscure de Biella, où l’on imagine, dans une semi-hallucination, des maîtres tailleurs possédés, maniant la craie et le ciseau comme des poètes forcenés."),
    new LookImage("image4.JPG", false, true, "En 2021, pas moins de 900 millions de vêtements usagés ont été gracieusement expédiés au Kenya. Une aumône textile, une générosité post-consommation des pays riches. Sauf que, petit détail : un tiers de ces pièces était si atrocement conçu — bourré de plastique, de médiocrité et de sueur d’enfant — qu’il a été directement brûlé ou jeté, polluant joyeusement les sols et les poumons des habitants. Le summum de l’élégance occidentale : offrir son rebut à l’Afrique, tout en dégazant un nuage toxique pour la planète. Chapeau bas. Et l’on s’étonne ensuite que certains pestent contre la fast fashion ?"),
    new LookImage("image5.jpg", true, true, "Le style Ivy League et sartorial a une dimension historique et culturelle forte, inspirée des universités prestigieuses, du tailoring britannique et de la dolce vita italienne Le streetwear, bien que culturellement intéressant (hip-hop, skate, basketball), repose davantage sur la tendance et l’image commerciale"),
    new LookImage("image6.jpg", true, true, "Beaucoup de personnes rejettent l'art sartorial car ils partent du principe que l'art vestimentaire formalise tout. Ce qui en soit n'est pas faux. Cela dit le formalisme permet de poser un cadre c'est la que la creativité donne le meilleur d'elle meme. Sans cadre la creativité se laisse aller au grand n'importe quoi. Jouer avec les regles plus ou moins contraignantes du costume masculin est un art subtil dans lequel les esprits exigeants mais joueur s'adonnent à coeur joie"),
    new LookImage("image7.jpg", false, true, "lapo elkann toujours aussi naze"),
    new LookImage("image8.jpg", true,true , "Soyons honnêtes : les règles vestimentaires qui gouvernaient la vie d’un gentleman au XXe siècle tenaient plus de l’ascèse que du caprice. Il fallait parfois changer de tenue cinq fois par jour – oui, cinq – en fonction de l’heure, de l’activité, du lieu, voire de l’humeur du majordome. C’était un ballet textile d’une rigueur presque militaire. On passait de la tenue de promenade à celle du déjeuner, puis du tea-time à celle du dîner formel, sans oublier le smoking de rigueur pour la soirée. Qui fait encore ça aujourd’hui ? Même le cadre sup le plus dopé au personal branding n’oserait rivaliser. Quant aux nobles de notre époque,  il est à craindre qu’eux aussi aient troqué le vestiaire patrimonial pour un jean Uniqlo et un pull en cachemire fatigué. Triste époque où même les héritiers manquent d’héritage.il faut le reconnaître : ces anciens codes étaient exigeants, contraignants, et parfois franchement absurdes… mais quelle dramaturgie de l’existence ! Derrière chaque changement de tenue, il y avait un art de vivre, une liturgie du quotidien. Ces hommes, loin d’être de simples vêtements sur pattes, célébraient chaque moment comme une scène de théâtre. Le déjeuner n’était pas un repas rapide, mais un rituel. Une promenade n’était pas une pause santé, mais une apparition.Aujourd’hui ? C’est le règne du jean-basket omniprésent, cet uniforme sans âme porté de 7h à 23h, du lit au bar en passant par le bureau. Une tenue unique pour une vie qui ne distingue plus rien : ni le lieu, ni l’heure, ni la compagnie."),
    new LookImage("image9.JPG", false, true, "La fast fashion s’adapte rapidement aux tendances, permettant aux consommateurs de renouveler leur garde-robe en fonction de leurs goûts changeants Le sartorialisme reste associé à un certain formalisme, tandis que le streetwear et la fast fashion s’adaptent à une société en perpétuel mouvement"),
    new LookImage("image10.jpg", true, true, "« Les costumes et compagnie c’est un truc de bourges ! » Alors permettez moi de rectifier votre idiotie…  J’ai assisté une fois à une vente privée chez Supreme (autrefois accredité marque street skate blabla tres tendance) et je n’ai pas vu des CLIENTS pauvres venant des bidonvilles a ces ventes ...  Non je n’ai vu que des petits bourges parisiens qui voulaient des hoodies editions limités (que plus personne ne met aujourdhui"),
    new LookImage("image11.JPG", true),
    new LookImage("image12.jpeg", true),
    new LookImage("image13.png", true),
    new LookImage("image14.jpg", true, true, "japon style"),
    new LookImage("image15.jpg", true, true, "tres beau"),
    new LookImage("image16.jpg", true, true, "tres beau"),
    new LookImage("image17.jpg", false, true, "tres moche"),
    new LookImage("image18.jpg", true, true, "tres bien"),
    new LookImage("image19.jpg", false, true, "tres moche"),
    new LookImage("image20.jpg", true, true, "tres beau"),
    new LookImage("image21.jpg", true),
    new LookImage("image22.jpg", false, true, "se la raconte trop"),
    new LookImage("image23.jpg", true, true, "tres beau"),
    new LookImage("image24.JPG", false, true, "merdique"),
    new LookImage("image25.jpg", false, true, "merdique"),
    new LookImage("image26.jpg", false),
    new LookImage("image27.jpg", false, true, "a ne pas imiter"),
    new LookImage("image28.jpg", true, true, "ok"),
    new LookImage("image29.jpg", true),
    new LookImage("image30.jpg", true, true, "ok"),
    new LookImage("image31.jpg", false, true, "ok moche"),
    new LookImage("image32.jpg", true, true, "ok bg"),
    new LookImage("image33.jpg", true),
    new LookImage("image34.jpg", true, true, "ok ok"),
    new LookImage("image35.jpg", true),
    new LookImage("image36.jpg", true, true, "ok"),
    new LookImage("image37.jpg", false, true, "ok pt"),
    new LookImage("image38.jpg", true, true, "okk"),
    new LookImage("image39.jpg", true),
    new LookImage("image40.JPG", false, true, "naze"),
    new LookImage("image41.jpg", false, true, "lasdeg"),
    new LookImage("image42.JPG", false, true, "pourri"), 
    new LookImage("image43.jpg", true),
    new LookImage("image44.jpg", false, true, "lame"),
    new LookImage("image45.JPG", false, true, "horrigle"),
    new LookImage("image46.jpg", true, true, "genial"),
    new LookImage("image47.jpg", true, true, "Ozwald Boateng c'est une success story mais egalement un style inimitable certaine du a sa double culture et donc a sa singularité ethnique au sein de savile row."),
    new LookImage("image48.jpg", true, true, "italian srtyle"),
    new LookImage("image49.jpg", true, true, "black sartorial"),
    new LookImage("image50.JPG", false, true, "debilite stylistique"),
    new LookImage("image51.jpg", true, true, "simple and stylish"),
    new LookImage("image52.jpg", true, true, "dope"),
    new LookImage("image53.jpg", true, true, "black excellence"),
    new LookImage("image54.jpg", true, true, " noir excellence agin"),
    new LookImage("image55.jpg", true, true, "japanese stylishhh"),
    new LookImage("image56.jpg", true, true, "sprezzatura"),
    new LookImage("image57.jpg", true, true, "black sprezzatura"),
    new LookImage("image58.jpg", true),
    new LookImage("image59.jpg", true),
    new LookImage("image60.jpg", true),
    new LookImage("image61.jpg", true),
    new LookImage("image62.jpg", true),
    new LookImage("image63.jpg", true, true, "L’excuse du confort est souvent utilisée pour justifier un relâchement vestimentaire, mais en réalité, le confort ne s’oppose pas à l’élégance. Un costume bien coupé dans une matière respirante et souple (comme une veste italienne en laine légère ou en lin) est souvent bien plus agréable à porter qu’un hoodie en polyester, qui tient trop chaud et n’offre pas une bonne circulation de l’air Le vrai problème, ce n’est donc pas le confort en soi, mais plutôt  Le manque d’habitude : Les gens ne savent plus ce que c’est que de porter des vêtements bien ajustés et bien conçus, ils assimilent élégance à rigidité  La flemme : On privilégie la facilité et on évite tout effort vestimentaire, même minime L’influence de la mode streetwear / sportswear : Depuis les années 90, le casualwear domine et impose une vision du confort qui rime avec large et mou. En fait, beaucoup de gens ne font plus la différence entre se sentir bien et être négligé."),
    new LookImage("image64.jpg", true, true, "ghetto style again"),
    new LookImage("image64.JPG", false, true, "ghetto again"),
    new LookImage("image65.jpg", false, true, "ghetto"),
    new LookImage("image66.jpg", false, true, "ghetto"),
    new LookImage("image67.jpg", false, true, "ghetto"),
    new LookImage("image68.jpg", false, true, "ghetto"),
    new LookImage("image69.jpg", false, true, "ghetto"),
    new LookImage("image70.jpg", true, true, "hype"),
    new LookImage("image71.jpg", true, true, "hype"),
    new LookImage("image72.jpg", false, true, "Non, désolé, le sartorialisme ne m’a pas subitement donné des envies de bals costumés façon autrichienne, ni de loges à l’opéra avec jumelles dorées et chignon amidonné. Je ne suis pas soudainement devenu accro au golf, au bridge ou aux réceptions mondaines sur gazon anglais. Je n’ai, à vrai dire, aucun grief contre ces plaisirs feutrés — mais non, l’élégance classique ne m’a pas transformé en figurant de Downton Abbey. Car s’intéresser à l’art sartorial, ce n’est pas s’acoquiner avec un chapelet de clichés usés jusqu’à la trame. Ce n’est pas se prendre pour un aristocrate en exil dès qu’on enfile une veste croisée. C’est au contraire ouvrir les yeux sur la comédie grotesque de la mode contemporaine — cet immense théâtre de pacotille où polyester et greenwashing s’unissent pour saboter à la fois la planète et notre silhouette. Le sartorialisme, pour moi, fut un réveil. Un sevrage brutal de l’hyperconsommation textile et de ses oripeaux toxiques — des tissus synthétiques qui vous filent des boutons, autant sur la peau que sur la conscience."),
    new LookImage("image73.jpg", false, true, "Non, désolé, le sartorialisme ne m’a pas subitement donné des envies de bals costumés façon autrichienne, ni de loges à l’opéra avec jumelles dorées et chignon amidonné. Je ne suis pas soudainement devenu accro au golf, au bridge ou aux réceptions mondaines sur gazon anglais. Je n’ai, à vrai dire, aucun grief contre ces plaisirs feutrés — mais non, l’élégance classique ne m’a pas transformé en figurant de Downton Abbey. Car s’intéresser à l’art sartorial, ce n’est pas s’acoquiner avec un chapelet de clichés usés jusqu’à la trame. Ce n’est pas se prendre pour un aristocrate en exil dès qu’on enfile une veste croisée. C’est au contraire ouvrir les yeux sur la comédie grotesque de la mode contemporaine — cet immense théâtre de pacotille où polyester et greenwashing s’unissent pour saboter à la fois la planète et notre silhouette. Le sartorialisme, pour moi, fut un réveil. Un sevrage brutal de l’hyperconsommation textile et de ses oripeaux toxiques — des tissus synthétiques qui vous filent des boutons, autant sur la peau que sur la conscience."),
    new LookImage("image74.jpg", false, true, "hype"),
    new LookImage("image75.jpg", false, true, "hype"),
    new LookImage("image76.jpg", true, true, "Les musulmans ont La Mecque.Les chrétiens ont Lourdes.Et les sartorialistes ? Ils ont Jermyn Street, Savile Row et les ruelles solaires de Naples. Voilà leurs lieux saints, leurs sanctuaires, leurs temples de pierre, de laine froide et de flanelle céleste. C’est là que s’opère le grand pèlerinage, non pas pour laver l’âme, mais pour sublimer la silhouette, affûter le vestiaire, et communier avec ce que l’humanité produit de plus noble après l’opéra et le civet de lièvre : la veste bien coupée. Car oui, à un certain point, on ne parle plus de passion. On parle d’obsession. Cette quête de la coupe parfaite, de la matière idéale, du blazer qui tombe comme une strophe de Verlaine et qui s’ajuste comme un vers bien métrique : c’est une transe esthétique Et puis, il y a cette émotion que seuls les vrais initiés connaissent : tenir entre ses mains une veste confectionnée par un artisan de renom. Pas une vulgaire pièce griffée par une start-up de marketeux sortis de HEC, qui vendent du polyester à 800 euros en parlant de « storytelling ». Non, une vraie veste. Une pièce née d’un savoir pluriséculaire, transmise de père en fils, de tailleur en tailleur, d’étoffe en étoffe, quelque part entre Biella et Naples. C’est plus qu’un vêtement. C’est un fragment de civilisation."),
    new LookImage("image77.jpg", true, true, "Nous revendiquons haut et fort notre amour pour l’univers preppy, le style Ivy League, la silhouette tailleurisée, les cols boutonnés, les revers bien dessinés, et les pantalons à pli franc comme une répartie de Wilde.Mais que l’on ne se méprenne pas : nous ne rêvons pas d’un monde où Lima, Tombouctou et Shanghai défileraient tous en costume trois pièces. Nous ne sommes pas ces apôtres du mondialisme textile qui rêvent d’uniformiser l’humanité à grands coups de burgers, de gobelets Starbucks et de survêtements molletonnés. Nous ne sommes pas les architectes d’un village global où l’on s’habille partout pareil, pense pareil, consomme pareil, et s’ennuie à mourir pareil Non. Nous sommes, au contraire, les avocats d’une diversité authentique, d’un pluralisme esthétique, d’un monde où l’on pourrait, enfin, porter autre chose que du polyester triste ou des logos hystériques. Le costume trois pièces est le pinacle du vestiaire occidental ? Fort bien. Mais chaque civilisation possède son équivalent sartorial, son vêtement de cérémonie, sa coupe noble, son tissu sacré : djellaba en laine fine, boubou brodé, kimono ancestral, sari soyeux, hanbok raffiné… Tous disent quelque chose d’un peuple, d’une géographie, d’un climat, d’une spiritualité."),


  ];
  
  // Fonction pour obtenir 10 images aléatoires uniques
  function getRandomImages() {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }
  
  let selectedImages = []; // Pour la session en cours