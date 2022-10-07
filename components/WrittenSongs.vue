<template>
  <VerticalNav1 />
  <main style="min-height: 1000px">
    <div class="bg-gray-100 dark:bg-slate-800">
      <div class="container mx-auto">
        <div role="article" class="bg-gray-100 dark:bg-slate-700 py-12 md:px-8">
          <div class="px-4 xl:px-0 py-10">
            <div class="flex flex-col lg:flex-row flex-wrap">
              <div class="mt-1 lg:mt-0 lg:w-3/5">
                <div>
                  <h1
                    class="text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 dark:text-gray-400 tracking-normal lg:w-11/12"
                  >
                    All Written Songs
                  </h1>
                </div>
              </div>

              <div class="lg:w-2/5 flex mt-10 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">
                <div class="pt-2 relative text-gray-600">
                  <input
                    class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-white dark:text-white dark:bg-slate-600 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    v-model="input"
                    placeholder="Search song by title"
                  />

                  <button
                    type="submit"
                    class="focus:ring-2 focus:ring-offset-2 text-gray-600 focus:text-indigo-700 focus:rounded-full focus:bg-gray-100 focus:ring-indigo-700 bg-white dark:bg-slate-600 focus:outline-none absolute right-0 top-0 mt-5 mr-4"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-album-circle-user"
                      class="text-black h-5 w-5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="px-6 xl:px-0">
            <div
              class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8"
            >
              <div
                role="cell"
                class="bg-gray-100 dark:bg-slate-600"
                v-for="song in searchedProducts"
                :key="song.id"
              >
                <div
                  class="bg-white dark:bg-slate-600 p-5 rounded-md relative h-full w-full"
                >
                  <!-- class="absolute inset-0 object-center object-cover h-full w-full"  -->
                  <span
                    ><img
                      class="bg-gray-200 h-10 w-10 dark:bg-slate-600 p-2 mb-5 rounded-full"
                      src="../assets/images/catoon.png"
                      alt="home-1"
                  /></span>
                  <h1 class="pb-4 text-2xl font-semibold dark:text-gray-300">
                    {{ song.title }}
                  </h1>
                  <div class="my-5">
                    <div
                      class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.5"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <h4 class="text-md text-gray-900 dark:text-gray-100">
                        {{ song.id }}
                      </h4>
                    </div>
                    <div
                      class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 class="text-md text-gray-900 dark:text-gray-200">
                        {{ song.desc }}
                      </h4>
                    </div>
                  </div>
                  <a
                    class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 dark:text-indigo-200 font-bold cursor-pointer flex items-center"
                    href="#"
                  >
                    <p>Show All</p>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-arrow-narrow-right"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#4338CA"
                        fill="indigo-600 dark:white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { computed, ref } from "vue";
import VerticalNav1 from "~~/components/verticalNav.vue";

export default {
  components: { VerticalNav1 },
  setup() {
    let input = ref("");
    let songs = ref([
      {
        id: 1,
        title: "BINTI WA ZAYUNI",
        desc: `1. Binti wa Zayuni kweli amevaa utukufu, amevaa jua
                    na nyota katika mwili wake, naye binti wa Babeli
                    amevaa kiulimwengu na majina ya matusi kwake
                    Mungu Mwenyenzi.
                    Jiulize ndugu yangu wewe u pande gani, kwake binti wa
                    Zayuni ama binti Babeli, binti wa Zayuni ni kanisa lile
                    teule, binti wa Babeli ni imani ilopotovu.
                    2. Unjumbe wa malaika wa tatu wahimiza tokeni kwake
                    binti Babeli hivi leo, kwani hivi karibuni ataja
                    kuangamizwa, pamoja na waliofuata maagizo yake.
                    3. Binti wa Zayuni huzituza amri kumi na ushuhuda wa
                    Yashuah kote ulimwenguni, naye binti wa Babeli
                    huifuata dunia na mafundisho yake ambayo ni
                    mapotovu`,
      },
      {
        id: 2,
        title: "NAINUA MACHO YANGU",
        desc: `1. Nainua macho yangu niutazame ule mlima, msaanda
                wangu watoka kwako uliyeumba mbingu na nchi.
                Ni furaha ya moyo wangu kuishi na wewe Mwokozi
                unapodumu rohoni mwangu nahodha wa maisha yangu.
                2. Ulinificha na utanificha ulinzi wako wanitosha wewe
                utendaye maajabu nina uhakika wa makuu.
                3. Nitatembea na nisichoke nipande milima na nishuke
                nivuke baharini na mito si mimi mbali ni wewe
                Bwana.
                4. Nawaombea watesi wangu wafungue macho
                wakuone warekebishe yao mienendo waone fadhili
                zako nyingi.`,
      },
      {
        id: 3,
        title: "MSIFATHAIKE",
        desc: `Msifathaike mioyoni mwenu makao ni mengi mwa
                        Baba yangu naenda kutayarisha mahali tutakapoishi
                        pamoja nanyi, sasa makao ameshayaandaa ishara
                        nyingi nimeshaziona zasema kwamba Yashuah yu
                        arudi.
                        (Kitambo tu, kitambo tu bado hatujafika mwisho wa
                        safari tumwone pia tukaishi naye aketiye juu ya kiti cha
                        enzi) x2 kitambo tu
                        2. Yangu masikio yamesikia uzuri na ukuu wa ahadi
                        walizoandaliwa wateule baada ya safari duniani, 
                        3
                        natamani kumwona Yashuah wangu nasubiri
                        kuingia mjini watakapoishi wote washindi.
                        3. Majina yetu yatakapoitwa tutafurahi na kushangilia
                        tumezipokea ahadi zetu pamoja na manabii na
                        mitume jina lako leo limeandikwa je utasomwa
                        miongoni mwao watakatifu wote wakisomwa.
                        4. Itakuwa fraha iliyoje machozi yetu akiyapanguza
                        shinda na dhiki zikifika mwisho hakuna uchungu
                        wala huzuni hakikisha vazi umesafisha uwe tayari
                        kumlaki Yashuah tuingie kwa raha ya milele`,
      },
      {
        id: 4,
        title: "KUJA KWA YASHUAH",
        desc: `1. Kuja kwa Yashuah kumekaribia sana, tarubeta ya
                Yashuah itasikika, wafu katika Yashuah
                watafufuliwa tutamlaki Yashuah mawinguni.
                Tushangilie Yashuah wetu, mfalme wa amani
                ametukomboa, tutatawala naye Yashuah, dunianai
                milele hata milele.
                2. Ni vyema tufahamu siri ndugu zangu sio wote
                watalala mavumbini walio hai katika Yashuah akija
                watabadilishwa na kumlaki
                3. Ufalme wa Yashuah wa miaka elfu moja utakuwa ni
                ufalme wa amani shetani atafungwa miaka elfu moja
                pasiwe hata mmoja anayedanganywa.
                4. Ole wao walio lala mavumbini pasipo na tumaini la
                uzima, hawatapokea ufufuo wa kwanza mbali
                watangojea hukumu ifike`,
      },
      {
        id: 5,
        title: "1.12.ITAKUWA SIKU YA AJABU",
        desc: `1. Itakuwa siku ya ajabu, Yashuah akirudi na ufalme
                    wake kuwachukua waliomwamini awapeleke zayuni
                    Halleluyah siku hiyo ya Bwan awalio watakatifu
                    wataridhi na Yashuah ooh ooh wataishi na Yashuah
                    katika mji huo milele na milele
                    2. Itakuwa furaha tele kwa wale wote waliomwamini
                    wakipewa taji ya uzima kwa kuyashinda ya dunia.
                    3. E ndugu yangu nakuhimiza mwamini Yashuah
                    maishani mwako ili ajapo na ufalme wake upewe taji
                    ya uzima.`,
      },
      {
        id: 6,
        title: "PALIKUWEPO NIKODEMU",
        desc: ` 1. Kama wewe umepata neno litokalo Yerusalem
                hubiria jirani yako ashikane na Wayahudi.
                Soma, Bibilia iliandikwa kwa pumzi ya Elohim, yafaa
                kwa mafundisho, kuongoza na kounya watu
                2. Nabii Isaiya alitabiri katika siku zamwisho, mataifa
                yataunnganishwa na wana Waisraeli.
                3. Jihadhari manabii wa uongo, wajao kama kondoo
                ndani yao ni umbwa mwitu, kwa vitendo
                utawatambua.
                4. Tubu dhambi upate ubatizo kwa jina la Yahshuah
                Messiah, upate ondoleo la dhambi, upokee roho wa
                kweli.
                5. Ezekieli kumi na nane, roho zote ni mali yake bali
                roho itendayo dhambi kwa hakika ndiyo itakayo
                kufa.`,
      },
      {
        id: 6,
        title: "PALIKUWEPO NIKODEMU",
        desc: ` 1. Kama wewe umepata neno litokalo Yerusalem
                hubiria jirani yako ashikane na Wayahudi.
                Soma, Bibilia iliandikwa kwa pumzi ya Elohim, yafaa
                kwa mafundisho, kuongoza na kounya watu
                2. Nabii Isaiya alitabiri katika siku zamwisho, mataifa
                yataunnganishwa na wana Waisraeli.
                3. Jihadhari manabii wa uongo, wajao kama kondoo
                ndani yao ni umbwa mwitu, kwa vitendo
                utawatambua.
                4. Tubu dhambi upate ubatizo kwa jina la Yahshuah
                Messiah, upate ondoleo la dhambi, upokee roho wa
                kweli.
                5. Ezekieli kumi na nane, roho zote ni mali yake bali
                roho itendayo dhambi kwa hakika ndiyo itakayo
                kufa.`,
      },
    ]);
    const searchedProducts = computed(() => {
      return songs.value.filter((song) => {
        return song.title.toLowerCase().indexOf(input.value.toLowerCase()) != -1;
      });
    });

    return { songs, input, searchedProducts };
  },
};
</script>
