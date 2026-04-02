/**
 * [MASTER REGISTRY]: AREA_NODES_AGGREGATOR v18.0.01 (SOUTHERN_EXPANSION_STABLE)
 * [STRATEGY]: Centralized Entry Point | Priority-Based Ranking | Regional Domination
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { bangkokNode } from "./bangkok";
import { chiangMaiNode } from "./chiang-mai";
import { chonBuriNode } from "./chon-buri";
import { kamphaengPhetNode } from "./kamphaeng-phet";
import { khonKaenNode } from "./khon-kaen";
import { koratNode } from "./korat";
import { nakhonSawanNode } from "./nakhon-sawan";
import { phichitNode } from "./phichit";
import { phitsanulokNode } from "./phitsanulok";
import { phuketNode } from "./phuket";
import { sukhothaiNode } from "./sukhothai";
import { takNode } from "./tak";
import { uttaraditNode } from "./uttaradit";
import { lampangNode } from "./lampang";
import { chiangRaiNode } from "./chiang-rai";
import { maeHongSonNode } from "./mae-hong-son";

// [NORTHERN & CENTRAL EXPANSION]:
import { ayutthayaNode } from "./ayutthaya";
import { kanchanaburiNode } from "./kanchanaburi";
import { suphanBuriNode } from "./suphan-buri";
import { lopburiNode } from "./lopburi";
import { saraburiNode } from "./saraburi";
import { nakhonPathomNode } from "./nakhon-pathom";
import { nonthaburiNode } from "./nonthaburi";
import { pathumThaniNode } from "./pathum-thani";
import { samutPrakanNode } from "./samut-prakan";
import { samutSakhonNode } from "./samut-sakhon";
import { samutSongkhramNode } from "./samut-songkhram";
import { rayongNode } from "./rayong";
import { chanthaburiNode } from "./chanthaburi";
import { tratNode } from "./trat";
import { chachoengsaoNode } from "./chachoengsao";
import { prachinBuriNode } from "./prachin-buri";
import { saKaeoNode } from "./sa-kaeo";
import { nakhonSiThammaratNode } from "./nakhon-si-thammarat";
import { phatthalungNode } from "./phatthalung";
import { satunNode } from "./satun";
import { trangNode } from "./trang";
import { yalaNode } from "./yala";
import { pattaniNode } from "./pattani";
import { narathiwatNode } from "./narathiwat";
import { udonThaniNode } from "./udon-thani";
import { ubonRatchathaniNode } from "./ubon-ratchathani";
import { krabiNode } from "./krabi";
import { songkhlaNode } from "./songkhla";
import { buriramNode } from "./buriram";
import { angThongNode } from "./ang-thong";
import { chaiNatNode } from "./chai-nat";
import { nakhonNayokNode } from "./nakhon-nayok";
import { singBuriNode } from "./sing-buri";
import { ratchaburiNode } from "./ratchaburi";
import { phetchaburiNode } from "./phetchaburi";
import { prachuapKhiriKhanNode } from "./prachuap-khiri-khan";
import { nanNode } from "./nan";
import { phraeNode } from "./phrae";
import { phayaoNode } from "./phayao";
import { lamphunNode } from "./lamphun";
import { uthaiThaniNode } from "./uthai-thani";
import { phetchabunNode } from "./phetchabun";
import { loeiNode } from "./loei";
import { nongKhaiNode } from "./nong-khai";
import { sakonNakhonNode } from "./sakon-nakhon";
import { surinNode } from "./surin";
import { chaiyaphumNode } from "./chaiyaphum";
import { nakhonPhanomNode } from "./nakhon-phanom";
import { roiEtNode } from "./roi-et";
import { siSaKetNode } from "./si-sa-ket";
import { mukdahanNode } from "./mukdahan";
import { kalasinNode } from "./kalasin";
import { mahaSarakhamNode } from "./maha-sarakham";
import { yasothonNode } from "./yasothon";
import { amnatCharoenNode } from "./amnat-charoen";
import { buengKanNode } from "./bueng-kan";
import { nongBuaLamphuNode } from "./nong-bua-lamphu";

// [SOUTHERN EXPANSION NODES]:
import { chumphonNode } from "./chumphon";
import { phangNgaNode } from "./phang-nga";
import { ranongNode } from "./ranong";
import { suratThaniNode } from "./surat-thani";

import type { AreaNode } from "../../types";

/**
 * [REGISTRY]: รวมทุก Node เข้าด้วยกัน
 * การเรียงลำดับตาม Priority (DESC) จะช่วยให้หน้าที่มีกำลังซื้อสูง (High-Value Nodes)
 * ถูก Crawler ของ Search Engine เข้าถึงและประมวลผลก่อนเป็นอันดับแรก
 */
export const AREA_NODES: AreaNode[] = [
  bangkokNode,
  chiangMaiNode,
  chonBuriNode,
  kamphaengPhetNode,
  khonKaenNode,
  koratNode,
  nakhonSawanNode,
  phichitNode,
  phitsanulokNode,
  phuketNode,
  sukhothaiNode,
  takNode,
  uttaraditNode,
  lampangNode,
  chiangRaiNode,
  maeHongSonNode,
  // Expansion Nodes
  ayutthayaNode,
  kanchanaburiNode,
  suphanBuriNode,
  lopburiNode,
  saraburiNode,
  nakhonPathomNode,
  nonthaburiNode,
  pathumThaniNode,
  samutPrakanNode,
  samutSakhonNode,
  samutSongkhramNode,
  rayongNode,
  chanthaburiNode,
  tratNode,
  chachoengsaoNode,
  prachinBuriNode,
  saKaeoNode,
  nakhonSiThammaratNode,
  phatthalungNode,
  satunNode,
  trangNode,
  yalaNode,
  pattaniNode,
  narathiwatNode,
  udonThaniNode,
  ubonRatchathaniNode,
  krabiNode,
  songkhlaNode,
  buriramNode,
  angThongNode,
  chaiNatNode,
  nakhonNayokNode,
  singBuriNode,
  ratchaburiNode,
  phetchaburiNode,
  prachuapKhiriKhanNode,
  nanNode,
  phraeNode,
  phayaoNode,
  lamphunNode,
  uthaiThaniNode,
  phetchabunNode,
  loeiNode,
  nongKhaiNode,
  sakonNakhonNode,
  surinNode,
  chaiyaphumNode,
  nakhonPhanomNode,
  roiEtNode,
  siSaKetNode,
  mukdahanNode,
  kalasinNode,
  mahaSarakhamNode,
  yasothonNode,
  amnatCharoenNode,
  buengKanNode,
  nongBuaLamphuNode,
  // Southern Nodes
  chumphonNode,
  phangNgaNode,
  ranongNode,
  suratThaniNode,
].sort((a, b) => b.priority - a.priority);
