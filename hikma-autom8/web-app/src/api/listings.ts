import {queryMortonListings} from "./morton/query";

export async function search(suburb: string){
  // return queryMortonListings(suburb)
  return mockReturn()
}

function mockReturn(){
  return {
    "listings": [
      {
        "name": "106/81C Lord Sheffield Circuit, Penrith",
        "dates": [
          {
            "day": "Tuesday",
            "time": "4:25 pm - 4:40 pm",
            "date": "Tuesday, 4:25 pm - 4:40 pm"
          }
        ],
        "price": "$600",
        "agentName": "Georgia Borland",
        "agentPhone": "0448 430 247",
        "priceInterval": "pw",
        "link": "https://www.morton.com.au/lease/nsw/western-sydney/penrith/residential/apartment/7837333",
        "bedroom": "2",
        "bathroom": "2",
        "carSpace": "1",
        "images": [
          "https://img.agentaccount.com/74972cc771eb641103d4fc4baa52a3e8caea1cca",
          "https://img.agentaccount.com/e398254f257e1dd4f6c1a3f80fa54b320e849f5c",
          "https://img.agentaccount.com/ae66cb672cf99eeafc514b5f9b6443b0f42fa331",
          "https://img.agentaccount.com/125d2b6c7cb389435d43cbf7b0d2d70a5aaeb5bb",
          "https://img.agentaccount.com/e90e76760c60ca323daefa026b8ceafd88b12eb8",
          "https://img.agentaccount.com/1492d69a2e5a3ab03cd6f2ef4a1d1c84dc85e642",
          "https://img.agentaccount.com/50fde225052779246641e17a91da6b88f10934d4",
          "https://img.agentaccount.com/472d583f5d20035c9996936757dc0a1ab44f437a",
          "https://img.agentaccount.com/19149e92c8acdfc8d32ac2eacaea04e6d2efe72f",
          "https://img.agentaccount.com/e7f2401a81603daa97f83000b138e3ed65dd991b",
          "https://img.agentaccount.com/cea9f19c1de8e061ad15509d4826ec64f33c4b90",
          "https://img.agentaccount.com/39ad31ceba8285d729f6ccb6b9e2557dd810cbf7",
          "https://img.agentaccount.com/b3693b0a05cb4acb6ccd56cfda7e6ad8e995bec8",
          "https://img.agentaccount.com/9eb88a2848171de31a0f5b1a5749483e1b9f6416",
          "https://img.agentaccount.com/252a68233abf556e3df70d4c4bf90410a524e61c",
          "https://img.agentaccount.com/56e49e60ef89f49238086438426953c581a18067",
          "https://img.agentaccount.com/f8210147488dd7baa18e03ec0c72abd427b01a17",
          "https://img.agentaccount.com/038342c6601c75ed1fb8d8cdbe0716c980de5de2",
          "https://img.agentaccount.com/56f28b9e5ca7e53c557797af570323f8c2366e20",
          "https://img.agentaccount.com/74046376bdc1a4d0bd9c27b7cdb9005ed1d58050"
        ]
      },
      {
        "name": "405/81C Lord Sheffield Circuit, Penrith",
        "dates": [
          {
            "day": "Tuesday",
            "time": "4:55 pm - 5:10 pm",
            "date": "Tuesday, 4:55 pm - 5:10 pm"
          }
        ],
        "price": "$600",
        "agentName": "Georgia Borland",
        "agentPhone": "0448 430 247",
        "priceInterval": "pw",
        "link": "https://www.morton.com.au/lease/nsw/western-sydney/penrith/residential/apartment/7837000",
        "bedroom": "2",
        "bathroom": "2",
        "carSpace": "1",
        "images": [
          "https://img.agentaccount.com/62ac3ef73e8544dfbe6be5383ed6424317b37718",
          "https://img.agentaccount.com/cd476053f419f71251c90179f02643584a29fe0b",
          "https://img.agentaccount.com/da55fed1c73f6042a66224714d09bb69768b7d8b",
          "https://img.agentaccount.com/539403e2979edd95d78fd0f81f8b1c41396af557",
          "https://img.agentaccount.com/64d4a1a07e9c3039bea109c3af784170841d561b",
          "https://img.agentaccount.com/39f9922a15a52fa90fa09dd0017439dcdbefdcec",
          "https://img.agentaccount.com/a523fe2c4d04e257daa48e609d793ca3b03038bc",
          "https://img.agentaccount.com/1165d01fab4273a3524eea8a485fd6dc32f51da5",
          "https://img.agentaccount.com/7e0c4b64650dad1b50a63e08207a23cf35ed7b48",
          "https://img.agentaccount.com/0b92c5060dc06376389ba72927a25079b6f8b00b",
          "https://img.agentaccount.com/2a94f77640840bdd49542a51d9bea9e1f8234b21",
          "https://img.agentaccount.com/16f3b26fb8b46d44d25036715a43a4c12315d506",
          "https://img.agentaccount.com/8be5a36d488df9fb7f6e568540440617d149180f",
          "https://img.agentaccount.com/8fa3c3a3cc13535062d68dd7339bed24281139d0"
        ]
      },
      {
        "name": "101/81C Lord Sheffield Circuit, Penrith",
        "dates": [
          {
            "day": "Tuesday",
            "time": "4:40 pm - 4:55 pm",
            "date": "Tuesday, 4:40 pm - 4:55 pm"
          }
        ],
        "price": "$580",
        "agentName": "Georgia Borland",
        "agentPhone": "0448 430 247",
        "priceInterval": "pw",
        "link": "https://www.morton.com.au/lease/nsw/western-sydney/penrith/residential/apartment/7834963",
        "bedroom": "2",
        "bathroom": "2",
        "carSpace": "1",
        "images": [
          "https://img.agentaccount.com/16dab6095a886f7071bedbcf81ca2ebb9065d4aa",
          "https://img.agentaccount.com/c70934f0195cebb82d998cf54cbe050a1f36c3b5",
          "https://img.agentaccount.com/30c20581120e09a719ba69af9866bfc9b6c1b955",
          "https://img.agentaccount.com/89f610d68a2ed69f5f5232d257fd9ef102c4c965",
          "https://img.agentaccount.com/e68722215fcdae35937840a14695a15795526777",
          "https://img.agentaccount.com/ff36e64c245bb59bf5ad72e5e1da8caa6c00c1b8",
          "https://img.agentaccount.com/6c1cb94ce444a5ca04323ec0745ed8a8a7e336ab",
          "https://img.agentaccount.com/cfa7464830101a6b548c4f837f040b14d0964753",
          "https://img.agentaccount.com/c424440277bb5ce70d3e0cb73b823dfcb6cee6f2",
          "https://img.agentaccount.com/d5d2ea7fdb595044dfcd541f747b6c0c74bb257e",
          "https://img.agentaccount.com/e36bfb2e89de6ef452873400d5ede3d803816c45",
          "https://img.agentaccount.com/2a39bb047b7f0e770111172bdd4552136243fc49",
          "https://img.agentaccount.com/44e218b72e52208ac5f5f94524cc21dc0832b69d",
          "https://img.agentaccount.com/9308957df6306c1c5219191113c5cc0762bebd6b",
          "https://img.agentaccount.com/e8a65f3a013f663f4391f7c5a8b7cbcbf24cda31",
          "https://img.agentaccount.com/749c87c2216e9d7c5c3c5b0f64c9d2f90c634e4f",
          "https://img.agentaccount.com/70a7247c641e36c6f0cff3fadc95432906a11f88",
          "https://img.agentaccount.com/0c6c2cc7c8daff97f4a0a960fb946edc922fd25b",
          "https://img.agentaccount.com/54da75dd1702e9dbfb5945950b83058764315936"
        ]
      },
      {
        "name": "201/101C Lord Sheffield Circuit, Penrith",
        "dates": [
          {
            "day": "Tuesday",
            "time": "5:15 pm - 5:30 pm",
            "date": "Tuesday, 5:15 pm - 5:30 pm"
          }
        ],
        "price": "$620",
        "agentName": "Anthony Fleming",
        "agentPhone": "0437 929 484",
        "priceInterval": "per week",
        "link": "https://www.morton.com.au/lease/nsw/western-sydney/penrith/residential/apartment/7832575",
        "bedroom": "2",
        "bathroom": "2",
        "carSpace": "1",
        "images": [
          "https://img.agentaccount.com/7c0b4ef163f1f5bfd7d39905f901a05289559b1a",
          "https://img.agentaccount.com/ad615c988ccba92ce1385443defe4fa1c345cdc6",
          "https://img.agentaccount.com/ba6fbb6c3e79e5b61b41b1c73ab4e467ba301de6",
          "https://img.agentaccount.com/f80e4e6abf34e0d1a37a330bac3606b8e7432662",
          "https://img.agentaccount.com/4b4665b72b917a694dcdde65939ac2f912203e44",
          "https://img.agentaccount.com/911ffcb79622431e4ebd7b6c52f20e275ee731d4",
          "https://img.agentaccount.com/e58af5f6f0cbce373b63d52a6a67c4959cfa7fa0",
          "https://img.agentaccount.com/a7da015097002dd37c307da82273d105de880044",
          "https://img.agentaccount.com/3cd17221d97e3f2f42d274f67a4627226cbf1b0b",
          "https://img.agentaccount.com/567357ea63ecc2e223b390cb07746df895ed8614",
          "https://img.agentaccount.com/7a9da2386a10e167d2bca847058e1fdd5a90c830",
          "https://img.agentaccount.com/5f42c86dc8f14ab19fd3c4b74a8272b80b633fb5",
          "https://img.agentaccount.com/a4472f9049b1ac22b42e5fe9ac7dc6550fddab50",
          "https://img.agentaccount.com/512d384e4ac34d46488813868401ac8d7a2faeb2",
          "https://img.agentaccount.com/a905933cd3c32c19cefe83c2dc1fdd484d424133",
          "https://img.agentaccount.com/e306cf9220832b88013a53308f559397915e7082",
          "https://img.agentaccount.com/3df63d30b658b1e79d58427b9ccbfaa5ea435e4a",
          "https://img.agentaccount.com/399d9325c1ec47c7d5bba19cd6d0513d0ed928ec",
          "https://img.agentaccount.com/57b061ccbcf7aa293f248674929af3e6246b8565",
          "https://img.agentaccount.com/3860ed669670145175333a3ab4c7cfed576d0ad9",
          "https://img.agentaccount.com/6997c2ce17cb92a1b95cab234314943d1746ca36"
        ]
      },
      {
        "name": "102/8 Aviators Way, Penrith",
        "dates": [],
        "price": "$470",
        "agentName": "Anthony Fleming",
        "agentPhone": "0437 929 484",
        "priceInterval": "per week",
        "link": "https://www.morton.com.au/lease/nsw/western-sydney/penrith/residential/apartment/7828539",
        "bedroom": "2",
        "bathroom": "2",
        "carSpace": "1",
        "images": [
          "https://img.agentaccount.com/3c4b1f14a7646c24edafb4592fedc45325f0a265",
          "https://img.agentaccount.com/73fbfdc08f51d77a25238c0ef1ff2742e72878c8",
          "https://img.agentaccount.com/e56801582f902f2e63bac5ba7da65c2cf8af0f2e",
          "https://img.agentaccount.com/85132a1cd256a7a41eed3b7669681f9dc69eadef",
          "https://img.agentaccount.com/cf52c3de6b20637f80f506e5c4ded2ccbdf039ff",
          "https://img.agentaccount.com/84220420d0ced4089ab0fda90ab99902cad787aa",
          "https://img.agentaccount.com/27e29a3bb10b83fde0460d0e5bc8814a8fccf678",
          "https://img.agentaccount.com/93b70f73fe21133d61c11a14e8b56ea0c88db4d3",
          "https://img.agentaccount.com/d01d3ec9ca0c8ec24480e1c6fd30cfe58ce77f76",
          "https://img.agentaccount.com/f2a0918f36c3f0a840cc34a4ec92097d29a577fd",
          "https://img.agentaccount.com/8bbe648337c7807df9f238be3f747d3264fa456a",
          "https://img.agentaccount.com/4f6650ae32181dd3235ca51aa6f2720507925589",
          "https://img.agentaccount.com/65858b0d2c5613a0cab438a20a17e2c1c019976d",
          "https://img.agentaccount.com/8022d89633ffe9e012d028eb55775dc240eaaa8b",
          "https://img.agentaccount.com/31ec28f447b4bbc1a55b5fc7334c0ebe9f5b1006",
          "https://img.agentaccount.com/9d9020c49a7b1aad2cb4644664c9c66fec740751",
          "https://img.agentaccount.com/c9325835660261654d48115570561edc3c504c22",
          "https://img.agentaccount.com/de7d535e869b803b03cb31642628556dca2944c6",
          "https://img.agentaccount.com/f326583caa21dc76e7047c7b4601b518a83e4167",
          "https://img.agentaccount.com/65e7d824d7d8e268bdf278a0fad8c096fd7af177",
          "https://img.agentaccount.com/35b00b41066e320e8a17aed8b60f5f5186c2a349",
          "https://img.agentaccount.com/37f004c7e1ec585208a43481123733262a98a3c1"
        ]
      },
      {
        "name": "59A Thornton Drive, Penrith",
        "dates": [
          {
            "day": "Tuesday",
            "time": "4:05 pm - 4:20 pm",
            "date": "Tuesday, 4:05 pm - 4:20 pm"
          }
        ],
        "price": "$430",
        "agentName": "Georgia Borland",
        "agentPhone": "0448 430 247",
        "priceInterval": "pw",
        "link": "https://www.morton.com.au/lease/nsw/western-sydney/penrith/residential/unit/7826801",
        "bedroom": "2",
        "bathroom": "2",
        "carSpace": "1",
        "images": [
          "https://img.agentaccount.com/19595c9836356a6fe928475cb83ec4952f4509a4",
          "https://img.agentaccount.com/2313bdabeda1785515c8f47d0fc53fe7d743cc71",
          "https://img.agentaccount.com/52f2e207ef38dff035f5d94db578e15b91a85589",
          "https://img.agentaccount.com/80bb40452090cd829090cff401ebaa61925f2197",
          "https://img.agentaccount.com/715b640aff7707eee2f2c2d00e3a6f9361175579",
          "https://img.agentaccount.com/b40a5006dd8a2ece77b3518a77983471cc68c5ed",
          "https://img.agentaccount.com/7e22a638003ca37079bb65507e4cc9e78f415a81",
          "https://img.agentaccount.com/66a336c3b4ef35a7a20adc143343fa17ee19df3e",
          "https://img.agentaccount.com/ebcde7774ed2859f8b38a924a10ada5397019f27",
          "https://img.agentaccount.com/e18430d998051332a10f78743a7e42b6e8728bf5",
          "https://img.agentaccount.com/bc520b5487779bbad54ed5fc66ccf454a23b4be7",
          "https://img.agentaccount.com/64f0cb66501104e1230be519f9fdb194135aeed2",
          "https://img.agentaccount.com/303616739f10d678b8f812421595fac2ddf648ca"
        ]
      },
      {
        "name": "103/10 Aviators Way, Penrith",
        "dates": [],
        "price": "$620",
        "agentName": "Anthony Fleming",
        "agentPhone": "0437 929 484",
        "priceInterval": "per week",
        "link": "https://www.morton.com.au/lease/nsw/western-sydney/penrith/residential/apartment/7817892",
        "bedroom": "2",
        "bathroom": "2",
        "carSpace": "1",
        "images": [
          "https://img.agentaccount.com/59cc07add2baab1753c8ac0235cda593f6db5cea",
          "https://img.agentaccount.com/36890fe2e3c40a91cf42c20b044aa0f8deb3f1c6",
          "https://img.agentaccount.com/7a18782ac3bf22ba1dd7774843cc7166deca264c",
          "https://img.agentaccount.com/504b2ae7b4ab78f369d526318d8532d8d4bbbeeb",
          "https://img.agentaccount.com/cc4f638cf1a63833eba2db6de07b179009259b06",
          "https://img.agentaccount.com/32b8daa4a66087d454717e75cbfa791a2387b984",
          "https://img.agentaccount.com/df16aa867d7e2a2b24ef3bc1a5d91a9dfa909e1d",
          "https://img.agentaccount.com/f789e7c651c6d0966a9c26887083dd8c1e7829c1",
          "https://img.agentaccount.com/19049c74619d6adf325a78b7a3fd3d0d641237b6",
          "https://img.agentaccount.com/ecba39df9738d9fb9cf514ac2fbcf7a815a352fe",
          "https://img.agentaccount.com/26a2be3de3ae8d7d841bec35f9eedafb340ec782",
          "https://img.agentaccount.com/42a4b00c17b30f396c2429d60f17dfcbbc04d0be",
          "https://img.agentaccount.com/d82d0d9036345e6f8c2923a6fe3feeb4fa63b268",
          "https://img.agentaccount.com/ced51a1c2e7000a06a888efccbd33c3b8333de0c",
          "https://img.agentaccount.com/c67f77e7ee22fd934807b8eb8d48359ecf2b1e77",
          "https://img.agentaccount.com/7372e2c3cee7eaed5088fe73ad9bcc4af0625771",
          "https://img.agentaccount.com/41177e94437337a967a6573e4caacd2a6ecb1b2a",
          "https://img.agentaccount.com/587f421f0b8c0aae06064c633fc82c27f5611c1a",
          "https://img.agentaccount.com/e8ab7f62a9052909faec2f70c10e027ef60762c7",
          "https://img.agentaccount.com/e0fca9fbd76696a265148ae3163c19d90fe4c392",
          "https://img.agentaccount.com/fb8e84fa901f718b0124c319e0b7da479dc75c7f",
          "https://img.agentaccount.com/50315018583ca61737e73dd01f5606e607ea7d2b",
          "https://img.agentaccount.com/e987901cb763ac11ef139f3e4ba74f9a7a05432d",
          "https://img.agentaccount.com/ec4a60b0a9b389fc8c6132128821b65aca4ff63e",
          "https://img.agentaccount.com/25a7c5e2e3110a2af326e2732ebe611624c179d9",
          "https://img.agentaccount.com/955434b821aaf6af297ad7f162c656fc974f99d0",
          "https://img.agentaccount.com/db36cb0ca507f8132a985927ca9209ea84ca5235"
        ]
      },
      {
        "name": "19A Tornaros Avenue, Penrith",
        "dates": [],
        "price": "$450",
        "agentName": "Anthony Fleming",
        "agentPhone": "0437 929 484",
        "priceInterval": "per week",
        "link": "https://www.morton.com.au/lease/nsw/western-sydney/penrith/residential/house/7807497",
        "bedroom": "2",
        "bathroom": "2",
        "carSpace": "1",
        "images": [
          "https://img.agentaccount.com/77bdeeaf8896fdb8ffb3ef56e9db49bf83b7b1fd",
          "https://img.agentaccount.com/5ef8e63b3ec3db366fc699cf572fb4c78d5b8728",
          "https://img.agentaccount.com/b5b949e7c6719603d41912cbe6df5038b981ed3b",
          "https://img.agentaccount.com/754170167666c01ac0614b8eac81f2306f217af7",
          "https://img.agentaccount.com/8b10187ab00940197aa20d57899d9e96c0f592e5",
          "https://img.agentaccount.com/8aaa727f99b6ff1081b91e21a7a9554fbcf1d6e9",
          "https://img.agentaccount.com/8e729d2fd0d27636e8acb16cb2c5f145f5a4d732",
          "https://img.agentaccount.com/9fa3d1f2b9698f7ae6e5082a9d6cb61890979fe1",
          "https://img.agentaccount.com/3362b321a913fbc14eb2d25ff126ef2ad30266c8"
        ]
      },
      {
        "name": "5/79-81 Lethbridge Street, Penrith",
        "dates": [],
        "price": "$600",
        "agentName": "Anthony Fleming",
        "agentPhone": "0437 929 484",
        "priceInterval": "per week",
        "link": "https://www.morton.com.au/lease/nsw/western-sydney/penrith/residential/townhouse/7785442",
        "bedroom": "2",
        "bathroom": "2",
        "carSpace": "1",
        "images": [
          "https://img.agentaccount.com/cbe203199c26dc89fb30d3089b4737f9784616e7",
          "https://img.agentaccount.com/e20d0928ca80bacb497b1565df2081578c9d2fba",
          "https://img.agentaccount.com/7657aafc3298a190e7c78edf8198562d72502399",
          "https://img.agentaccount.com/a930ae7c2baf9e8d7850b521be8c29b603377fdc",
          "https://img.agentaccount.com/6e8cce503a0e94584ade26c37e985826051f8b3e",
          "https://img.agentaccount.com/a44c718d4d9228441331ca61e41b372aa34a10f5",
          "https://img.agentaccount.com/a6150c2486dcc0121127ede3fbddf8ca53c3c987",
          "https://img.agentaccount.com/1a7411af1e10faa95592616fdf47887db49c15d0",
          "https://img.agentaccount.com/c60e9397c0cb4da5d63d9803f62dfdedb70dc095"
        ]
      }
    ],
    "byDate": {
      "Tuesday": [
        {
          "name": "59A Thornton Drive, Penrith",
          "dates": [
            {
              "day": "Tuesday",
              "time": "4:05 pm - 4:20 pm",
              "date": "Tuesday, 4:05 pm - 4:20 pm"
            }
          ],
          "price": "$430",
          "agentName": "Georgia Borland",
          "agentPhone": "0448 430 247",
          "priceInterval": "pw",
          "link": "https://www.morton.com.au/lease/nsw/western-sydney/penrith/residential/unit/7826801",
          "bedroom": "2",
          "bathroom": "2",
          "carSpace": "1",
          "images": [
            "https://img.agentaccount.com/19595c9836356a6fe928475cb83ec4952f4509a4",
            "https://img.agentaccount.com/2313bdabeda1785515c8f47d0fc53fe7d743cc71",
            "https://img.agentaccount.com/52f2e207ef38dff035f5d94db578e15b91a85589",
            "https://img.agentaccount.com/80bb40452090cd829090cff401ebaa61925f2197",
            "https://img.agentaccount.com/715b640aff7707eee2f2c2d00e3a6f9361175579",
            "https://img.agentaccount.com/b40a5006dd8a2ece77b3518a77983471cc68c5ed",
            "https://img.agentaccount.com/7e22a638003ca37079bb65507e4cc9e78f415a81",
            "https://img.agentaccount.com/66a336c3b4ef35a7a20adc143343fa17ee19df3e",
            "https://img.agentaccount.com/ebcde7774ed2859f8b38a924a10ada5397019f27",
            "https://img.agentaccount.com/e18430d998051332a10f78743a7e42b6e8728bf5",
            "https://img.agentaccount.com/bc520b5487779bbad54ed5fc66ccf454a23b4be7",
            "https://img.agentaccount.com/64f0cb66501104e1230be519f9fdb194135aeed2",
            "https://img.agentaccount.com/303616739f10d678b8f812421595fac2ddf648ca"
          ],
          "date": {
            "day": "Tuesday",
            "time": "4:05 pm - 4:20 pm",
            "date": "Tuesday, 4:05 pm - 4:20 pm"
          }
        },
        {
          "name": "106/81C Lord Sheffield Circuit, Penrith",
          "dates": [
            {
              "day": "Tuesday",
              "time": "4:25 pm - 4:40 pm",
              "date": "Tuesday, 4:25 pm - 4:40 pm"
            }
          ],
          "price": "$600",
          "agentName": "Georgia Borland",
          "agentPhone": "0448 430 247",
          "priceInterval": "pw",
          "link": "https://www.morton.com.au/lease/nsw/western-sydney/penrith/residential/apartment/7837333",
          "bedroom": "2",
          "bathroom": "2",
          "carSpace": "1",
          "images": [
            "https://img.agentaccount.com/74972cc771eb641103d4fc4baa52a3e8caea1cca",
            "https://img.agentaccount.com/e398254f257e1dd4f6c1a3f80fa54b320e849f5c",
            "https://img.agentaccount.com/ae66cb672cf99eeafc514b5f9b6443b0f42fa331",
            "https://img.agentaccount.com/125d2b6c7cb389435d43cbf7b0d2d70a5aaeb5bb",
            "https://img.agentaccount.com/e90e76760c60ca323daefa026b8ceafd88b12eb8",
            "https://img.agentaccount.com/1492d69a2e5a3ab03cd6f2ef4a1d1c84dc85e642",
            "https://img.agentaccount.com/50fde225052779246641e17a91da6b88f10934d4",
            "https://img.agentaccount.com/472d583f5d20035c9996936757dc0a1ab44f437a",
            "https://img.agentaccount.com/19149e92c8acdfc8d32ac2eacaea04e6d2efe72f",
            "https://img.agentaccount.com/e7f2401a81603daa97f83000b138e3ed65dd991b",
            "https://img.agentaccount.com/cea9f19c1de8e061ad15509d4826ec64f33c4b90",
            "https://img.agentaccount.com/39ad31ceba8285d729f6ccb6b9e2557dd810cbf7",
            "https://img.agentaccount.com/b3693b0a05cb4acb6ccd56cfda7e6ad8e995bec8",
            "https://img.agentaccount.com/9eb88a2848171de31a0f5b1a5749483e1b9f6416",
            "https://img.agentaccount.com/252a68233abf556e3df70d4c4bf90410a524e61c",
            "https://img.agentaccount.com/56e49e60ef89f49238086438426953c581a18067",
            "https://img.agentaccount.com/f8210147488dd7baa18e03ec0c72abd427b01a17",
            "https://img.agentaccount.com/038342c6601c75ed1fb8d8cdbe0716c980de5de2",
            "https://img.agentaccount.com/56f28b9e5ca7e53c557797af570323f8c2366e20",
            "https://img.agentaccount.com/74046376bdc1a4d0bd9c27b7cdb9005ed1d58050"
          ],
          "date": {
            "day": "Tuesday",
            "time": "4:25 pm - 4:40 pm",
            "date": "Tuesday, 4:25 pm - 4:40 pm"
          }
        },
        {
          "name": "101/81C Lord Sheffield Circuit, Penrith",
          "dates": [
            {
              "day": "Tuesday",
              "time": "4:40 pm - 4:55 pm",
              "date": "Tuesday, 4:40 pm - 4:55 pm"
            }
          ],
          "price": "$580",
          "agentName": "Georgia Borland",
          "agentPhone": "0448 430 247",
          "priceInterval": "pw",
          "link": "https://www.morton.com.au/lease/nsw/western-sydney/penrith/residential/apartment/7834963",
          "bedroom": "2",
          "bathroom": "2",
          "carSpace": "1",
          "images": [
            "https://img.agentaccount.com/16dab6095a886f7071bedbcf81ca2ebb9065d4aa",
            "https://img.agentaccount.com/c70934f0195cebb82d998cf54cbe050a1f36c3b5",
            "https://img.agentaccount.com/30c20581120e09a719ba69af9866bfc9b6c1b955",
            "https://img.agentaccount.com/89f610d68a2ed69f5f5232d257fd9ef102c4c965",
            "https://img.agentaccount.com/e68722215fcdae35937840a14695a15795526777",
            "https://img.agentaccount.com/ff36e64c245bb59bf5ad72e5e1da8caa6c00c1b8",
            "https://img.agentaccount.com/6c1cb94ce444a5ca04323ec0745ed8a8a7e336ab",
            "https://img.agentaccount.com/cfa7464830101a6b548c4f837f040b14d0964753",
            "https://img.agentaccount.com/c424440277bb5ce70d3e0cb73b823dfcb6cee6f2",
            "https://img.agentaccount.com/d5d2ea7fdb595044dfcd541f747b6c0c74bb257e",
            "https://img.agentaccount.com/e36bfb2e89de6ef452873400d5ede3d803816c45",
            "https://img.agentaccount.com/2a39bb047b7f0e770111172bdd4552136243fc49",
            "https://img.agentaccount.com/44e218b72e52208ac5f5f94524cc21dc0832b69d",
            "https://img.agentaccount.com/9308957df6306c1c5219191113c5cc0762bebd6b",
            "https://img.agentaccount.com/e8a65f3a013f663f4391f7c5a8b7cbcbf24cda31",
            "https://img.agentaccount.com/749c87c2216e9d7c5c3c5b0f64c9d2f90c634e4f",
            "https://img.agentaccount.com/70a7247c641e36c6f0cff3fadc95432906a11f88",
            "https://img.agentaccount.com/0c6c2cc7c8daff97f4a0a960fb946edc922fd25b",
            "https://img.agentaccount.com/54da75dd1702e9dbfb5945950b83058764315936"
          ],
          "date": {
            "day": "Tuesday",
            "time": "4:40 pm - 4:55 pm",
            "date": "Tuesday, 4:40 pm - 4:55 pm"
          }
        },
        {
          "name": "405/81C Lord Sheffield Circuit, Penrith",
          "dates": [
            {
              "day": "Tuesday",
              "time": "4:55 pm - 5:10 pm",
              "date": "Tuesday, 4:55 pm - 5:10 pm"
            }
          ],
          "price": "$600",
          "agentName": "Georgia Borland",
          "agentPhone": "0448 430 247",
          "priceInterval": "pw",
          "link": "https://www.morton.com.au/lease/nsw/western-sydney/penrith/residential/apartment/7837000",
          "bedroom": "2",
          "bathroom": "2",
          "carSpace": "1",
          "images": [
            "https://img.agentaccount.com/62ac3ef73e8544dfbe6be5383ed6424317b37718",
            "https://img.agentaccount.com/cd476053f419f71251c90179f02643584a29fe0b",
            "https://img.agentaccount.com/da55fed1c73f6042a66224714d09bb69768b7d8b",
            "https://img.agentaccount.com/539403e2979edd95d78fd0f81f8b1c41396af557",
            "https://img.agentaccount.com/64d4a1a07e9c3039bea109c3af784170841d561b",
            "https://img.agentaccount.com/39f9922a15a52fa90fa09dd0017439dcdbefdcec",
            "https://img.agentaccount.com/a523fe2c4d04e257daa48e609d793ca3b03038bc",
            "https://img.agentaccount.com/1165d01fab4273a3524eea8a485fd6dc32f51da5",
            "https://img.agentaccount.com/7e0c4b64650dad1b50a63e08207a23cf35ed7b48",
            "https://img.agentaccount.com/0b92c5060dc06376389ba72927a25079b6f8b00b",
            "https://img.agentaccount.com/2a94f77640840bdd49542a51d9bea9e1f8234b21",
            "https://img.agentaccount.com/16f3b26fb8b46d44d25036715a43a4c12315d506",
            "https://img.agentaccount.com/8be5a36d488df9fb7f6e568540440617d149180f",
            "https://img.agentaccount.com/8fa3c3a3cc13535062d68dd7339bed24281139d0"
          ],
          "date": {
            "day": "Tuesday",
            "time": "4:55 pm - 5:10 pm",
            "date": "Tuesday, 4:55 pm - 5:10 pm"
          }
        },
        {
          "name": "201/101C Lord Sheffield Circuit, Penrith",
          "dates": [
            {
              "day": "Tuesday",
              "time": "5:15 pm - 5:30 pm",
              "date": "Tuesday, 5:15 pm - 5:30 pm"
            }
          ],
          "price": "$620",
          "agentName": "Anthony Fleming",
          "agentPhone": "0437 929 484",
          "priceInterval": "per week",
          "link": "https://www.morton.com.au/lease/nsw/western-sydney/penrith/residential/apartment/7832575",
          "bedroom": "2",
          "bathroom": "2",
          "carSpace": "1",
          "images": [
            "https://img.agentaccount.com/7c0b4ef163f1f5bfd7d39905f901a05289559b1a",
            "https://img.agentaccount.com/ad615c988ccba92ce1385443defe4fa1c345cdc6",
            "https://img.agentaccount.com/ba6fbb6c3e79e5b61b41b1c73ab4e467ba301de6",
            "https://img.agentaccount.com/f80e4e6abf34e0d1a37a330bac3606b8e7432662",
            "https://img.agentaccount.com/4b4665b72b917a694dcdde65939ac2f912203e44",
            "https://img.agentaccount.com/911ffcb79622431e4ebd7b6c52f20e275ee731d4",
            "https://img.agentaccount.com/e58af5f6f0cbce373b63d52a6a67c4959cfa7fa0",
            "https://img.agentaccount.com/a7da015097002dd37c307da82273d105de880044",
            "https://img.agentaccount.com/3cd17221d97e3f2f42d274f67a4627226cbf1b0b",
            "https://img.agentaccount.com/567357ea63ecc2e223b390cb07746df895ed8614",
            "https://img.agentaccount.com/7a9da2386a10e167d2bca847058e1fdd5a90c830",
            "https://img.agentaccount.com/5f42c86dc8f14ab19fd3c4b74a8272b80b633fb5",
            "https://img.agentaccount.com/a4472f9049b1ac22b42e5fe9ac7dc6550fddab50",
            "https://img.agentaccount.com/512d384e4ac34d46488813868401ac8d7a2faeb2",
            "https://img.agentaccount.com/a905933cd3c32c19cefe83c2dc1fdd484d424133",
            "https://img.agentaccount.com/e306cf9220832b88013a53308f559397915e7082",
            "https://img.agentaccount.com/3df63d30b658b1e79d58427b9ccbfaa5ea435e4a",
            "https://img.agentaccount.com/399d9325c1ec47c7d5bba19cd6d0513d0ed928ec",
            "https://img.agentaccount.com/57b061ccbcf7aa293f248674929af3e6246b8565",
            "https://img.agentaccount.com/3860ed669670145175333a3ab4c7cfed576d0ad9",
            "https://img.agentaccount.com/6997c2ce17cb92a1b95cab234314943d1746ca36"
          ],
          "date": {
            "day": "Tuesday",
            "time": "5:15 pm - 5:30 pm",
            "date": "Tuesday, 5:15 pm - 5:30 pm"
          }
        }
      ]
    }
  }
}