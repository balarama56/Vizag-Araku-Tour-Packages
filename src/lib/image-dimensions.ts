import hero from "@/assets/hero.jpg";

const dimensions: Record<string, { width: number; height: number }> = {
  "/images/vizag-araku-annavaram/araku.jpg": {
    "width": 850,
    "height": 410
  },
  "/images/vizag-araku-annavaram/borra.jpg": {
    "width": 867,
    "height": 542
  },
  "/images/vizag-araku-annavaram/vizag.jpg": {
    "width": 850,
    "height": 410
  },
  "/images/puri-konark/puri1.jpg": {
    "width": 730,
    "height": 486
  },
  "/images/puri-konark/heritage.jpg": {
    "width": 736,
    "height": 552
  },
  "/images/puri-konark/lingaraj.jpg": {
    "width": 360,
    "height": 477
  },
  "/images/puri-konark/chilika.jpg": {
    "width": 1140,
    "height": 532
  },
  "/images/lambasingi-hotels/brundavanam-0.jpg": {
    "width": 740,
    "height": 555
  },
  "/images/lambasingi-hotels/brundavanam-1.jpg": {
    "width": 962,
    "height": 724
  },
  "/images/lambasingi-hotels/horizon-1.jpg": {
    "width": 1024,
    "height": 768
  },
  "/images/lambasingi-hotels/horizon-0.jpg": {
    "width": 1024,
    "height": 768
  },
  "/images/lambasingi-hotels/raghu-1.jpg": {
    "width": 995,
    "height": 713
  },
  "/images/lambasingi-hotels/raghu-0.jpg": {
    "width": 938,
    "height": 710
  },
  "/images/lambasingi-hotels/rrr-0.jpg": {
    "width": 1040,
    "height": 520
  },
  "/images/lambasingi-hotels/rrr-1.jpg": {
    "width": 1600,
    "height": 800
  },
  "/images/vadapalli/vadapalli.jpg": {
    "width": 1156,
    "height": 649
  },
  "/images/vadapalli/annavaram.jpg": {
    "width": 555,
    "height": 411
  },
  "/images/vadapalli/pithapuram.jpg": {
    "width": 1024,
    "height": 768
  },
  "/images/destinations/maredumilli.jpg": {
    "width": 983,
    "height": 517
  },
  "/images/destinations/papikondalu.jpg": {
    "width": 1156,
    "height": 867
  },
  "/images/destinations/jagdalpur.jpg": {
    "width": 983,
    "height": 574
  },
  "/images/destinations/deomali.jpg": {
    "width": 1600,
    "height": 738
  },
  "/images/araku-hotels/2-0.jpg": {
    "width": 720,
    "height": 446
  },
  "/images/araku-hotels/2-1.jpg": {
    "width": 1280,
    "height": 853
  },
  "/images/araku-hotels/0-1.jpg": {
    "width": 808,
    "height": 645
  },
  "/images/araku-hotels/0-0.jpg": {
    "width": 1024,
    "height": 512
  },
  "/images/araku-hotels/4-0.jpg": {
    "width": 1200,
    "height": 900
  },
  "/images/araku-hotels/4-1.jpg": {
    "width": 1200,
    "height": 900
  },
  "/images/araku-hotels/6-1.jpg": {
    "width": 1280,
    "height": 853
  },
  "/images/araku-hotels/6-0.jpg": {
    "width": 836,
    "height": 626
  },
  "/images/araku-hotels/1-0.jpg": {
    "width": 800,
    "height": 533
  },
  "/images/araku-hotels/3-0.jpg": {
    "width": 1024,
    "height": 461
  },
  "/images/araku-hotels/3-1.jpg": {
    "width": 1024,
    "height": 461
  },
  "/images/araku-hotels/7-1.jpg": {
    "width": 1024,
    "height": 682
  },
  "/images/araku-hotels/7-0.jpg": {
    "width": 870,
    "height": 580
  },
  "/images/araku-hotels/5-0.jpg": {
    "width": 1088,
    "height": 753
  },
  "/images/araku-hotels/5-1.jpg": {
    "width": 3154,
    "height": 2008
  },
  "/images/vizag-hotels/9-1.jpg": {
    "width": 1024,
    "height": 768
  },
  "/images/vizag-hotels/9-0.jpg": {
    "width": 1024,
    "height": 768
  },
  "/images/vizag-hotels/8-1.jpg": {
    "width": 1920,
    "height": 1281
  },
  "/images/vizag-hotels/8-0.jpg": {
    "width": 1156,
    "height": 771
  },
  "/images/vizag-hotels/10-1.jpg": {
    "width": 5760,
    "height": 3840
  },
  "/images/vizag-hotels/10-0.jpg": {
    "width": 1600,
    "height": 1067
  },
  "/images/vizag-hotels/2-0.jpg": {
    "width": 870,
    "height": 581
  },
  "/images/vizag-hotels/2-1.jpg": {
    "width": 1920,
    "height": 1280
  },
  "/images/vizag-hotels/4-0.jpg": {
    "width": 983,
    "height": 655
  },
  "/images/vizag-hotels/4-1.jpg": {
    "width": 1600,
    "height": 1067
  },
  "/images/vizag-hotels/6-1.jpg": {
    "width": 960,
    "height": 600
  },
  "/images/vizag-hotels/6-0.jpg": {
    "width": 1600,
    "height": 1067
  },
  "/images/vizag-hotels/1-1.jpg": {
    "width": 1280,
    "height": 853
  },
  "/images/vizag-hotels/1-0.jpg": {
    "width": 1088,
    "height": 612
  },
  "/images/vizag-hotels/3-0.jpg": {
    "width": 1156,
    "height": 771
  },
  "/images/vizag-hotels/3-1.jpg": {
    "width": 1600,
    "height": 1067
  },
  "/images/vizag-hotels/7-1.jpg": {
    "width": 1600,
    "height": 1063
  },
  "/images/vizag-hotels/7-0.jpg": {
    "width": 1360,
    "height": 904
  },
  "/images/pancharama/somarama.jpg": {
    "width": 601,
    "height": 450
  },
  "/images/pancharama/kumararama.jpg": {
    "width": 786,
    "height": 686
  },
  "/images/pancharama/draksharama.jpg": {
    "width": 867,
    "height": 1156
  },
  "/images/pancharama/amararama.jpg": {
    "width": 640,
    "height": 427
  },
  "/images/pancharama/ksheerarama.jpg": {
    "width": 608,
    "height": 450
  },
  "/images/cab-services/traveller.jpg": {
    "width": 1200,
    "height": 900
  },
  "/images/cab-services/innova.jpg": {
    "width": 720,
    "height": 720
  },
  "/images/cab-services/sedan.jpg": {
    "width": 1032,
    "height": 774
  },
  "/images/bus-services/miniBus.jpg": {
    "width": 626,
    "height": 836
  },
  "/images/bus-services/coach.jpg": {
    "width": 1200,
    "height": 554
  }
};
dimensions[hero] = {"width": 1156, "height": 655};

export function imageDimensions(source: string) {
  const path = source.replace(/^https?:\/\/[^/]+/, "").split(/[?#]/)[0]!;
  return dimensions[path] ?? dimensions[source] ?? {};
}
