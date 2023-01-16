import { Tags, ValueType, GroupWithData } from "topics/group";
import { GenerationContext, GenerationFrequency, GroupGenerator } from "topics/group-generator";

const generator: GroupGenerator = {
  generationFrequency: GenerationFrequency.Once,

  generate: async (context: GenerationContext): Promise<GroupWithData[]> => {
    return [
      {
        name: "the-merge-contributor",
        timestamp: context.timestamp,
        data: {
          "github:jflo": 1,
          "0x2bf7b04f143602692bbdc3ecbea68c2c65278eee": 1,
          "0x0b7265f8b7d886317ffde328ae8c6185bc1523da": 1,
          "github:shemnon": 1,
          "gurukamath.eth": 1,
          "samwilsn.eth": 1,
          "0x3f559454185098cb3a496f864a4bdd82b34c7fd1": 1,
          "github:samcm": 1,
          "github:barnabasbusa": 1,
          "github:savid": 1,
          "carlbeek.eth": 1,
          "github:ralexstokes": 1,
          "0x3b16821a5dbbff86e4a88ea0621ec6be016cd79a": 1,
          "ansgar.eth": 1,
          "vitalik.eth": 1,
          "github:casparschwa": 1,
          "0xf70299bdfe1c0c245c7c480d601dff71267ee88a": 1,
          "dankrad.eth": 1,
          "github:fredriksvantes": 1,
          "dtheo.eth": 1,
          "z3nchada.eth": 1,
          "github:jtraglia": 1,
          "0x008b3b2f992c0e14edaa6e2c662bec549caa8df1": 1,
          "0x873a45b49289b868e81547c6226357e7117e6070": 1,
          "github:holgerd77": 1,
          "0xf363c519f91e823184061e5bf28263262e2b9b8d": 1,
          "ricmoo.eth": 1,
          "github:karalabe": 1,
          "0x026e4640ea509d6c6db7526edb9f50b529bf9399": 1,
          "github:s1na": 1,
          "0xecb824d5f77c6a8c2172483bc2765d8e7dc3ef5c": 1,
          "0x46cd90445349e64f895c403c23839e79eb4065e4": 1,
          "github:zsfelfoldi": 1,
          "github:rjl493456442": 1,
          "github:lightclient": 1,
          "github:realbigsean": 1,
          "0x0a9e0a4cfffc9a7c7df37d8300e9f79ad15b986f": 1,
          "github:zedt3ster": 1,
          "michaelsproul.eth": 1,
          "0xca55123aba844d347d0a18d91a958eda531447ff": 1,
          "ethdreamer.eth": 1,
          "github:GregTheGreek": 1,
          "github:dapplion": 1,
          "github:philknows": 1,
          "github:wemeetagain": 1,
          "g11tech.eth": 1,
          "github:MicahZoltu": 1,
          "antid2ta.eth": 1,
          "github:LukaszRozmej": 1,
          "0x644177f8d79117c2b9c7596527642b3c2d05888e": 1,
          "github:smartprogrammer93": 1,
          "0xcf7679904d803afd9f9f9e62e423a705164cd823": 1,
          "matilote.eth": 1,
          "github:marcindsobczak": 1,
          "github:cbermudez97": 1,
          "github:jmederosalvarado": 1,
          "github:mratsim": 1,
          "ecodev.eth": 1,
          "github:etan-status": 1,
          "github:cheatfate": 1,
          "0x6e1d7f30b270e61e571cf7caa59ef1a573321b0a": 1,
          "trent.eth": 1,
          "github:timbeiko": 1,
          "github:prestonvanloon": 1,
          "jameshe.eth": 1,
          "0xf0443945ad3be9645382fc2537317da97feff3a9": 1,
          "0x3212974a4e53e5238f6ea193b36412db9ad61c26": 1,
          "nishantdas.eth": 1,
          "github:rkapka": 1,
          "saolyn.eth": 1,
          "github:potuz": 1,
          "github:lucassaldanha": 1,
          "github:ajsutton": 1,
          "github:mehdi-aouadi": 1,
          "0x376d5c3a16e9d015e8c584bb2d278e25f0ccb27b": 1,
          "github:rolfyone": 1,
          "0x68a01ca79685447b0bf32b1aca7c515448eb98b5": 1,
          "0x13aba75d11ab2e90cd30c0622bfa412ec849b39e": 1,
          "peterdavies.eth": 1,
          "0x153affb96fcb60085ee307996bdd2df0183a3682": 1,
          "0x2fb858991668840ce34f331402e0b3c66db078af": 1,
          "0x22d6637330af1de97a1f67d03a73b99a1e6d2263": 1,
          "github:rauljordan": 1,
          "0x054bf7b12d38ecd382b6a80f5e2b8af437a339c4": 1,
          "zacahuil.eth": 1,
          "github:macladson": 1,
          "0xa42841f25e64b12917c867ea906e20269f5c0d1d": 1,
          "github:StefanBratanov": 1,
          "github:skylenet": 1,
          "0xa3fd150da53b9b6f65ebb8210552da9d56c32bec": 1,
          "0x9938065bb2192678ecc2b3500f64fcba4882969d": 1,
          "github:tersec": 1,
          "github:Menduist": 1,
          "github:acolytec3": 1,
          "github:flcl42": 1,
          "github:zah": 1,
          "github:djrtwo": 1,
          "fradamt.eth": 1,
          "github:matkt": 1,
          "0xc577b071a2cbe812c44db125a87f66d08301c200": 1,
          "barnabe.eth": 1,
          "github:luca-zanolini": 1,
          "github:tbenr": 1,
          "github:protolambda": 1,
          "0x6848518ed95e7ac7da4951681cdec190fcdc4ac5": 1,
          "0xe019836a41cb707f79b991f60e241918097ac16e": 1,
          "arnetheduck.eth": 1,
          "github:zilm13": 1,
          "0x93F67f972C0Dd8D25990253aBC23A12545f74448": 1,
          "github:paulhauner": 1,
          "github:iamhsk": 1,
        },
        valueType: ValueType.Score,
        tags: [Tags.User],
      },
    ];
  },
};

export default generator;
