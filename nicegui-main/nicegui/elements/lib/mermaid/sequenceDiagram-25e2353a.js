import { g as getAccTitle, A as getDiagramTitle, z as setDiagramTitle, c as getConfig, s as setAccTitle, b as setAccDescription, a as getAccDescription, m as mermaidAPI, B as clear$1, l as log, d as sanitizeText, e as sanitizeUrl_1, f as common, T as parseFontSize, a0 as addFunction, a1 as ZERO_WIDTH_SPACE, h as assignWithDepth, j as select, k as configureSvgSize, x as utils } from "./mermaid-bf016224.js";
import { d as drawRect$1, a as drawBackgroundRect$1, b as drawEmbeddedImage, c as drawImage, e as getTextObj$1, g as getNoteRect$1 } from "./svgDrawCommon-98448648.js";
import { s as selectAll } from "./selectAll-8725692e.js";
var parser = function() {
  var o = function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v)
      ;
    return o2;
  }, $V0 = [1, 2], $V1 = [1, 3], $V2 = [1, 5], $V3 = [1, 7], $V4 = [2, 5], $V5 = [1, 15], $V6 = [1, 17], $V7 = [1, 19], $V8 = [1, 21], $V9 = [1, 22], $Va = [1, 23], $Vb = [1, 29], $Vc = [1, 30], $Vd = [1, 31], $Ve = [1, 32], $Vf = [1, 33], $Vg = [1, 34], $Vh = [1, 35], $Vi = [1, 36], $Vj = [1, 37], $Vk = [1, 38], $Vl = [1, 39], $Vm = [1, 40], $Vn = [1, 41], $Vo = [1, 43], $Vp = [1, 44], $Vq = [1, 46], $Vr = [1, 47], $Vs = [1, 48], $Vt = [1, 49], $Vu = [1, 50], $Vv = [1, 51], $Vw = [1, 54], $Vx = [1, 4, 5, 19, 21, 23, 26, 28, 34, 35, 36, 38, 40, 41, 42, 43, 44, 46, 48, 49, 51, 52, 53, 54, 55, 57, 58, 63, 64, 65, 66, 74, 84], $Vy = [4, 5, 21, 55, 57], $Vz = [4, 5, 19, 21, 23, 26, 28, 34, 35, 36, 38, 40, 41, 42, 43, 44, 46, 48, 49, 51, 55, 57, 58, 63, 64, 65, 66, 74, 84], $VA = [4, 5, 19, 21, 23, 26, 28, 34, 35, 36, 38, 40, 41, 42, 43, 44, 46, 48, 49, 51, 54, 55, 57, 58, 63, 64, 65, 66, 74, 84], $VB = [4, 5, 19, 21, 23, 26, 28, 34, 35, 36, 38, 40, 41, 42, 43, 44, 46, 48, 49, 51, 53, 55, 57, 58, 63, 64, 65, 66, 74, 84], $VC = [4, 5, 19, 21, 23, 26, 28, 34, 35, 36, 38, 40, 41, 42, 43, 44, 46, 48, 49, 51, 52, 55, 57, 58, 63, 64, 65, 66, 74, 84], $VD = [72, 73, 74], $VE = [1, 128], $VF = [1, 4, 5, 7, 19, 21, 23, 26, 28, 34, 35, 36, 38, 40, 41, 42, 43, 44, 46, 48, 49, 51, 52, 53, 54, 55, 57, 58, 63, 64, 65, 66, 74, 84];
  var parser2 = {
    trace: function trace() {
    },
    yy: {},
    symbols_: { "error": 2, "start": 3, "SPACE": 4, "NEWLINE": 5, "directive": 6, "SD": 7, "document": 8, "line": 9, "statement": 10, "box_section": 11, "box_line": 12, "participant_statement": 13, "openDirective": 14, "typeDirective": 15, "closeDirective": 16, ":": 17, "argDirective": 18, "box": 19, "restOfLine": 20, "end": 21, "signal": 22, "autonumber": 23, "NUM": 24, "off": 25, "activate": 26, "actor": 27, "deactivate": 28, "note_statement": 29, "links_statement": 30, "link_statement": 31, "properties_statement": 32, "details_statement": 33, "title": 34, "legacy_title": 35, "acc_title": 36, "acc_title_value": 37, "acc_descr": 38, "acc_descr_value": 39, "acc_descr_multiline_value": 40, "loop": 41, "rect": 42, "opt": 43, "alt": 44, "else_sections": 45, "par": 46, "par_sections": 47, "par_over": 48, "critical": 49, "option_sections": 50, "break": 51, "option": 52, "and": 53, "else": 54, "participant": 55, "AS": 56, "participant_actor": 57, "note": 58, "placement": 59, "text2": 60, "over": 61, "actor_pair": 62, "links": 63, "link": 64, "properties": 65, "details": 66, "spaceList": 67, ",": 68, "left_of": 69, "right_of": 70, "signaltype": 71, "+": 72, "-": 73, "ACTOR": 74, "SOLID_OPEN_ARROW": 75, "DOTTED_OPEN_ARROW": 76, "SOLID_ARROW": 77, "DOTTED_ARROW": 78, "SOLID_CROSS": 79, "DOTTED_CROSS": 80, "SOLID_POINT": 81, "DOTTED_POINT": 82, "TXT": 83, "open_directive": 84, "type_directive": 85, "arg_directive": 86, "close_directive": 87, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 4: "SPACE", 5: "NEWLINE", 7: "SD", 17: ":", 19: "box", 20: "restOfLine", 21: "end", 23: "autonumber", 24: "NUM", 25: "off", 26: "activate", 28: "deactivate", 34: "title", 35: "legacy_title", 36: "acc_title", 37: "acc_title_value", 38: "acc_descr", 39: "acc_descr_value", 40: "acc_descr_multiline_value", 41: "loop", 42: "rect", 43: "opt", 44: "alt", 46: "par", 48: "par_over", 49: "critical", 51: "break", 52: "option", 53: "and", 54: "else", 55: "participant", 56: "AS", 57: "participant_actor", 58: "note", 61: "over", 63: "links", 64: "link", 65: "properties", 66: "details", 68: ",", 69: "left_of", 70: "right_of", 72: "+", 73: "-", 74: "ACTOR", 75: "SOLID_OPEN_ARROW", 76: "DOTTED_OPEN_ARROW", 77: "SOLID_ARROW", 78: "DOTTED_ARROW", 79: "SOLID_CROSS", 80: "DOTTED_CROSS", 81: "SOLID_POINT", 82: "DOTTED_POINT", 83: "TXT", 84: "open_directive", 85: "type_directive", 86: "arg_directive", 87: "close_directive" },
    productions_: [0, [3, 2], [3, 2], [3, 2], [3, 2], [8, 0], [8, 2], [9, 2], [9, 1], [9, 1], [11, 0], [11, 2], [12, 2], [12, 1], [12, 1], [6, 4], [6, 6], [10, 1], [10, 4], [10, 2], [10, 4], [10, 3], [10, 3], [10, 2], [10, 3], [10, 3], [10, 2], [10, 2], [10, 2], [10, 2], [10, 2], [10, 1], [10, 1], [10, 2], [10, 2], [10, 1], [10, 4], [10, 4], [10, 4], [10, 4], [10, 4], [10, 4], [10, 4], [10, 4], [10, 1], [50, 1], [50, 4], [47, 1], [47, 4], [45, 1], [45, 4], [13, 5], [13, 3], [13, 5], [13, 3], [29, 4], [29, 4], [30, 3], [31, 3], [32, 3], [33, 3], [67, 2], [67, 1], [62, 3], [62, 1], [59, 1], [59, 1], [22, 5], [22, 5], [22, 4], [27, 1], [71, 1], [71, 1], [71, 1], [71, 1], [71, 1], [71, 1], [71, 1], [71, 1], [60, 1], [14, 1], [15, 1], [18, 1], [16, 1]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 4:
          yy.apply($$[$0]);
          return $$[$0];
        case 5:
        case 10:
          this.$ = [];
          break;
        case 6:
        case 11:
          $$[$0 - 1].push($$[$0]);
          this.$ = $$[$0 - 1];
          break;
        case 7:
        case 8:
        case 12:
        case 13:
          this.$ = $$[$0];
          break;
        case 9:
        case 14:
          this.$ = [];
          break;
        case 18:
          $$[$0 - 1].unshift({ type: "boxStart", boxData: yy.parseBoxData($$[$0 - 2]) });
          $$[$0 - 1].push({ type: "boxEnd", boxText: $$[$0 - 2] });
          this.$ = $$[$0 - 1];
          break;
        case 20:
          this.$ = { type: "sequenceIndex", sequenceIndex: Number($$[$0 - 2]), sequenceIndexStep: Number($$[$0 - 1]), sequenceVisible: true, signalType: yy.LINETYPE.AUTONUMBER };
          break;
        case 21:
          this.$ = { type: "sequenceIndex", sequenceIndex: Number($$[$0 - 1]), sequenceIndexStep: 1, sequenceVisible: true, signalType: yy.LINETYPE.AUTONUMBER };
          break;
        case 22:
          this.$ = { type: "sequenceIndex", sequenceVisible: false, signalType: yy.LINETYPE.AUTONUMBER };
          break;
        case 23:
          this.$ = { type: "sequenceIndex", sequenceVisible: true, signalType: yy.LINETYPE.AUTONUMBER };
          break;
        case 24:
          this.$ = { type: "activeStart", signalType: yy.LINETYPE.ACTIVE_START, actor: $$[$0 - 1] };
          break;
        case 25:
          this.$ = { type: "activeEnd", signalType: yy.LINETYPE.ACTIVE_END, actor: $$[$0 - 1] };
          break;
        case 31:
          yy.setDiagramTitle($$[$0].substring(6));
          this.$ = $$[$0].substring(6);
          break;
        case 32:
          yy.setDiagramTitle($$[$0].substring(7));
          this.$ = $$[$0].substring(7);
          break;
        case 33:
          this.$ = $$[$0].trim();
          yy.setAccTitle(this.$);
          break;
        case 34:
        case 35:
          this.$ = $$[$0].trim();
          yy.setAccDescription(this.$);
          break;
        case 36:
          $$[$0 - 1].unshift({ type: "loopStart", loopText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.LOOP_START });
          $$[$0 - 1].push({ type: "loopEnd", loopText: $$[$0 - 2], signalType: yy.LINETYPE.LOOP_END });
          this.$ = $$[$0 - 1];
          break;
        case 37:
          $$[$0 - 1].unshift({ type: "rectStart", color: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.RECT_START });
          $$[$0 - 1].push({ type: "rectEnd", color: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.RECT_END });
          this.$ = $$[$0 - 1];
          break;
        case 38:
          $$[$0 - 1].unshift({ type: "optStart", optText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.OPT_START });
          $$[$0 - 1].push({ type: "optEnd", optText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.OPT_END });
          this.$ = $$[$0 - 1];
          break;
        case 39:
          $$[$0 - 1].unshift({ type: "altStart", altText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.ALT_START });
          $$[$0 - 1].push({ type: "altEnd", signalType: yy.LINETYPE.ALT_END });
          this.$ = $$[$0 - 1];
          break;
        case 40:
          $$[$0 - 1].unshift({ type: "parStart", parText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.PAR_START });
          $$[$0 - 1].push({ type: "parEnd", signalType: yy.LINETYPE.PAR_END });
          this.$ = $$[$0 - 1];
          break;
        case 41:
          $$[$0 - 1].unshift({ type: "parStart", parText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.PAR_OVER_START });
          $$[$0 - 1].push({ type: "parEnd", signalType: yy.LINETYPE.PAR_END });
          this.$ = $$[$0 - 1];
          break;
        case 42:
          $$[$0 - 1].unshift({ type: "criticalStart", criticalText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.CRITICAL_START });
          $$[$0 - 1].push({ type: "criticalEnd", signalType: yy.LINETYPE.CRITICAL_END });
          this.$ = $$[$0 - 1];
          break;
        case 43:
          $$[$0 - 1].unshift({ type: "breakStart", breakText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.BREAK_START });
          $$[$0 - 1].push({ type: "breakEnd", optText: yy.parseMessage($$[$0 - 2]), signalType: yy.LINETYPE.BREAK_END });
          this.$ = $$[$0 - 1];
          break;
        case 46:
          this.$ = $$[$0 - 3].concat([{ type: "option", optionText: yy.parseMessage($$[$0 - 1]), signalType: yy.LINETYPE.CRITICAL_OPTION }, $$[$0]]);
          break;
        case 48:
          this.$ = $$[$0 - 3].concat([{ type: "and", parText: yy.parseMessage($$[$0 - 1]), signalType: yy.LINETYPE.PAR_AND }, $$[$0]]);
          break;
        case 50:
          this.$ = $$[$0 - 3].concat([{ type: "else", altText: yy.parseMessage($$[$0 - 1]), signalType: yy.LINETYPE.ALT_ELSE }, $$[$0]]);
          break;
        case 51:
          $$[$0 - 3].type = "addParticipant";
          $$[$0 - 3].description = yy.parseMessage($$[$0 - 1]);
          this.$ = $$[$0 - 3];
          break;
        case 52:
          $$[$0 - 1].type = "addParticipant";
          this.$ = $$[$0 - 1];
          break;
        case 53:
          $$[$0 - 3].type = "addActor";
          $$[$0 - 3].description = yy.parseMessage($$[$0 - 1]);
          this.$ = $$[$0 - 3];
          break;
        case 54:
          $$[$0 - 1].type = "addActor";
          this.$ = $$[$0 - 1];
          break;
        case 55:
          this.$ = [$$[$0 - 1], { type: "addNote", placement: $$[$0 - 2], actor: $$[$0 - 1].actor, text: $$[$0] }];
          break;
        case 56:
          $$[$0 - 2] = [].concat($$[$0 - 1], $$[$0 - 1]).slice(0, 2);
          $$[$0 - 2][0] = $$[$0 - 2][0].actor;
          $$[$0 - 2][1] = $$[$0 - 2][1].actor;
          this.$ = [$$[$0 - 1], { type: "addNote", placement: yy.PLACEMENT.OVER, actor: $$[$0 - 2].slice(0, 2), text: $$[$0] }];
          break;
        case 57:
          this.$ = [$$[$0 - 1], { type: "addLinks", actor: $$[$0 - 1].actor, text: $$[$0] }];
          break;
        case 58:
          this.$ = [$$[$0 - 1], { type: "addALink", actor: $$[$0 - 1].actor, text: $$[$0] }];
          break;
        case 59:
          this.$ = [$$[$0 - 1], { type: "addProperties", actor: $$[$0 - 1].actor, text: $$[$0] }];
          break;
        case 60:
          this.$ = [$$[$0 - 1], { type: "addDetails", actor: $$[$0 - 1].actor, text: $$[$0] }];
          break;
        case 63:
          this.$ = [$$[$0 - 2], $$[$0]];
          break;
        case 64:
          this.$ = $$[$0];
          break;
        case 65:
          this.$ = yy.PLACEMENT.LEFTOF;
          break;
        case 66:
          this.$ = yy.PLACEMENT.RIGHTOF;
          break;
        case 67:
          this.$ = [
            $$[$0 - 4],
            $$[$0 - 1],
            { type: "addMessage", from: $$[$0 - 4].actor, to: $$[$0 - 1].actor, signalType: $$[$0 - 3], msg: $$[$0] },
            { type: "activeStart", signalType: yy.LINETYPE.ACTIVE_START, actor: $$[$0 - 1] }
          ];
          break;
        case 68:
          this.$ = [
            $$[$0 - 4],
            $$[$0 - 1],
            { type: "addMessage", from: $$[$0 - 4].actor, to: $$[$0 - 1].actor, signalType: $$[$0 - 3], msg: $$[$0] },
            { type: "activeEnd", signalType: yy.LINETYPE.ACTIVE_END, actor: $$[$0 - 4] }
          ];
          break;
        case 69:
          this.$ = [$$[$0 - 3], $$[$0 - 1], { type: "addMessage", from: $$[$0 - 3].actor, to: $$[$0 - 1].actor, signalType: $$[$0 - 2], msg: $$[$0] }];
          break;
        case 70:
          this.$ = { type: "addParticipant", actor: $$[$0] };
          break;
        case 71:
          this.$ = yy.LINETYPE.SOLID_OPEN;
          break;
        case 72:
          this.$ = yy.LINETYPE.DOTTED_OPEN;
          break;
        case 73:
          this.$ = yy.LINETYPE.SOLID;
          break;
        case 74:
          this.$ = yy.LINETYPE.DOTTED;
          break;
        case 75:
          this.$ = yy.LINETYPE.SOLID_CROSS;
          break;
        case 76:
          this.$ = yy.LINETYPE.DOTTED_CROSS;
          break;
        case 77:
          this.$ = yy.LINETYPE.SOLID_POINT;
          break;
        case 78:
          this.$ = yy.LINETYPE.DOTTED_POINT;
          break;
        case 79:
          this.$ = yy.parseMessage($$[$0].trim().substring(1));
          break;
        case 80:
          yy.parseDirective("%%{", "open_directive");
          break;
        case 81:
          yy.parseDirective($$[$0], "type_directive");
          break;
        case 82:
          $$[$0] = $$[$0].trim().replace(/'/g, '"');
          yy.parseDirective($$[$0], "arg_directive");
          break;
        case 83:
          yy.parseDirective("}%%", "close_directive", "sequence");
          break;
      }
    },
    table: [{ 3: 1, 4: $V0, 5: $V1, 6: 4, 7: $V2, 14: 6, 84: $V3 }, { 1: [3] }, { 3: 8, 4: $V0, 5: $V1, 6: 4, 7: $V2, 14: 6, 84: $V3 }, { 3: 9, 4: $V0, 5: $V1, 6: 4, 7: $V2, 14: 6, 84: $V3 }, { 3: 10, 4: $V0, 5: $V1, 6: 4, 7: $V2, 14: 6, 84: $V3 }, o([1, 4, 5, 19, 23, 26, 28, 34, 35, 36, 38, 40, 41, 42, 43, 44, 46, 48, 49, 51, 55, 57, 58, 63, 64, 65, 66, 74, 84], $V4, { 8: 11 }), { 15: 12, 85: [1, 13] }, { 85: [2, 80] }, { 1: [2, 1] }, { 1: [2, 2] }, { 1: [2, 3] }, { 1: [2, 4], 4: $V5, 5: $V6, 6: 42, 9: 14, 10: 16, 13: 18, 14: 6, 19: $V7, 22: 20, 23: $V8, 26: $V9, 27: 45, 28: $Va, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: $Vb, 35: $Vc, 36: $Vd, 38: $Ve, 40: $Vf, 41: $Vg, 42: $Vh, 43: $Vi, 44: $Vj, 46: $Vk, 48: $Vl, 49: $Vm, 51: $Vn, 55: $Vo, 57: $Vp, 58: $Vq, 63: $Vr, 64: $Vs, 65: $Vt, 66: $Vu, 74: $Vv, 84: $V3 }, { 16: 52, 17: [1, 53], 87: $Vw }, o([17, 87], [2, 81]), o($Vx, [2, 6]), { 6: 42, 10: 55, 13: 18, 14: 6, 19: $V7, 22: 20, 23: $V8, 26: $V9, 27: 45, 28: $Va, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: $Vb, 35: $Vc, 36: $Vd, 38: $Ve, 40: $Vf, 41: $Vg, 42: $Vh, 43: $Vi, 44: $Vj, 46: $Vk, 48: $Vl, 49: $Vm, 51: $Vn, 55: $Vo, 57: $Vp, 58: $Vq, 63: $Vr, 64: $Vs, 65: $Vt, 66: $Vu, 74: $Vv, 84: $V3 }, o($Vx, [2, 8]), o($Vx, [2, 9]), o($Vx, [2, 17]), { 20: [1, 56] }, { 5: [1, 57] }, { 5: [1, 60], 24: [1, 58], 25: [1, 59] }, { 27: 61, 74: $Vv }, { 27: 62, 74: $Vv }, { 5: [1, 63] }, { 5: [1, 64] }, { 5: [1, 65] }, { 5: [1, 66] }, { 5: [1, 67] }, o($Vx, [2, 31]), o($Vx, [2, 32]), { 37: [1, 68] }, { 39: [1, 69] }, o($Vx, [2, 35]), { 20: [1, 70] }, { 20: [1, 71] }, { 20: [1, 72] }, { 20: [1, 73] }, { 20: [1, 74] }, { 20: [1, 75] }, { 20: [1, 76] }, { 20: [1, 77] }, o($Vx, [2, 44]), { 27: 78, 74: $Vv }, { 27: 79, 74: $Vv }, { 71: 80, 75: [1, 81], 76: [1, 82], 77: [1, 83], 78: [1, 84], 79: [1, 85], 80: [1, 86], 81: [1, 87], 82: [1, 88] }, { 59: 89, 61: [1, 90], 69: [1, 91], 70: [1, 92] }, { 27: 93, 74: $Vv }, { 27: 94, 74: $Vv }, { 27: 95, 74: $Vv }, { 27: 96, 74: $Vv }, o([5, 56, 68, 75, 76, 77, 78, 79, 80, 81, 82, 83], [2, 70]), { 5: [1, 97] }, { 18: 98, 86: [1, 99] }, { 5: [2, 83] }, o($Vx, [2, 7]), o($Vy, [2, 10], { 11: 100 }), o($Vx, [2, 19]), { 5: [1, 102], 24: [1, 101] }, { 5: [1, 103] }, o($Vx, [2, 23]), { 5: [1, 104] }, { 5: [1, 105] }, o($Vx, [2, 26]), o($Vx, [2, 27]), o($Vx, [2, 28]), o($Vx, [2, 29]), o($Vx, [2, 30]), o($Vx, [2, 33]), o($Vx, [2, 34]), o($Vz, $V4, { 8: 106 }), o($Vz, $V4, { 8: 107 }), o($Vz, $V4, { 8: 108 }), o($VA, $V4, { 45: 109, 8: 110 }), o($VB, $V4, { 47: 111, 8: 112 }), o($VB, $V4, { 8: 112, 47: 113 }), o($VC, $V4, { 50: 114, 8: 115 }), o($Vz, $V4, { 8: 116 }), { 5: [1, 118], 56: [1, 117] }, { 5: [1, 120], 56: [1, 119] }, { 27: 123, 72: [1, 121], 73: [1, 122], 74: $Vv }, o($VD, [2, 71]), o($VD, [2, 72]), o($VD, [2, 73]), o($VD, [2, 74]), o($VD, [2, 75]), o($VD, [2, 76]), o($VD, [2, 77]), o($VD, [2, 78]), { 27: 124, 74: $Vv }, { 27: 126, 62: 125, 74: $Vv }, { 74: [2, 65] }, { 74: [2, 66] }, { 60: 127, 83: $VE }, { 60: 129, 83: $VE }, { 60: 130, 83: $VE }, { 60: 131, 83: $VE }, o($VF, [2, 15]), { 16: 132, 87: $Vw }, { 87: [2, 82] }, { 4: [1, 135], 5: [1, 137], 12: 134, 13: 136, 21: [1, 133], 55: $Vo, 57: $Vp }, { 5: [1, 138] }, o($Vx, [2, 21]), o($Vx, [2, 22]), o($Vx, [2, 24]), o($Vx, [2, 25]), { 4: $V5, 5: $V6, 6: 42, 9: 14, 10: 16, 13: 18, 14: 6, 19: $V7, 21: [1, 139], 22: 20, 23: $V8, 26: $V9, 27: 45, 28: $Va, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: $Vb, 35: $Vc, 36: $Vd, 38: $Ve, 40: $Vf, 41: $Vg, 42: $Vh, 43: $Vi, 44: $Vj, 46: $Vk, 48: $Vl, 49: $Vm, 51: $Vn, 55: $Vo, 57: $Vp, 58: $Vq, 63: $Vr, 64: $Vs, 65: $Vt, 66: $Vu, 74: $Vv, 84: $V3 }, { 4: $V5, 5: $V6, 6: 42, 9: 14, 10: 16, 13: 18, 14: 6, 19: $V7, 21: [1, 140], 22: 20, 23: $V8, 26: $V9, 27: 45, 28: $Va, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: $Vb, 35: $Vc, 36: $Vd, 38: $Ve, 40: $Vf, 41: $Vg, 42: $Vh, 43: $Vi, 44: $Vj, 46: $Vk, 48: $Vl, 49: $Vm, 51: $Vn, 55: $Vo, 57: $Vp, 58: $Vq, 63: $Vr, 64: $Vs, 65: $Vt, 66: $Vu, 74: $Vv, 84: $V3 }, { 4: $V5, 5: $V6, 6: 42, 9: 14, 10: 16, 13: 18, 14: 6, 19: $V7, 21: [1, 141], 22: 20, 23: $V8, 26: $V9, 27: 45, 28: $Va, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: $Vb, 35: $Vc, 36: $Vd, 38: $Ve, 40: $Vf, 41: $Vg, 42: $Vh, 43: $Vi, 44: $Vj, 46: $Vk, 48: $Vl, 49: $Vm, 51: $Vn, 55: $Vo, 57: $Vp, 58: $Vq, 63: $Vr, 64: $Vs, 65: $Vt, 66: $Vu, 74: $Vv, 84: $V3 }, { 21: [1, 142] }, { 4: $V5, 5: $V6, 6: 42, 9: 14, 10: 16, 13: 18, 14: 6, 19: $V7, 21: [2, 49], 22: 20, 23: $V8, 26: $V9, 27: 45, 28: $Va, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: $Vb, 35: $Vc, 36: $Vd, 38: $Ve, 40: $Vf, 41: $Vg, 42: $Vh, 43: $Vi, 44: $Vj, 46: $Vk, 48: $Vl, 49: $Vm, 51: $Vn, 54: [1, 143], 55: $Vo, 57: $Vp, 58: $Vq, 63: $Vr, 64: $Vs, 65: $Vt, 66: $Vu, 74: $Vv, 84: $V3 }, { 21: [1, 144] }, { 4: $V5, 5: $V6, 6: 42, 9: 14, 10: 16, 13: 18, 14: 6, 19: $V7, 21: [2, 47], 22: 20, 23: $V8, 26: $V9, 27: 45, 28: $Va, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: $Vb, 35: $Vc, 36: $Vd, 38: $Ve, 40: $Vf, 41: $Vg, 42: $Vh, 43: $Vi, 44: $Vj, 46: $Vk, 48: $Vl, 49: $Vm, 51: $Vn, 53: [1, 145], 55: $Vo, 57: $Vp, 58: $Vq, 63: $Vr, 64: $Vs, 65: $Vt, 66: $Vu, 74: $Vv, 84: $V3 }, { 21: [1, 146] }, { 21: [1, 147] }, { 4: $V5, 5: $V6, 6: 42, 9: 14, 10: 16, 13: 18, 14: 6, 19: $V7, 21: [2, 45], 22: 20, 23: $V8, 26: $V9, 27: 45, 28: $Va, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: $Vb, 35: $Vc, 36: $Vd, 38: $Ve, 40: $Vf, 41: $Vg, 42: $Vh, 43: $Vi, 44: $Vj, 46: $Vk, 48: $Vl, 49: $Vm, 51: $Vn, 52: [1, 148], 55: $Vo, 57: $Vp, 58: $Vq, 63: $Vr, 64: $Vs, 65: $Vt, 66: $Vu, 74: $Vv, 84: $V3 }, { 4: $V5, 5: $V6, 6: 42, 9: 14, 10: 16, 13: 18, 14: 6, 19: $V7, 21: [1, 149], 22: 20, 23: $V8, 26: $V9, 27: 45, 28: $Va, 29: 24, 30: 25, 31: 26, 32: 27, 33: 28, 34: $Vb, 35: $Vc, 36: $Vd, 38: $Ve, 40: $Vf, 41: $Vg, 42: $Vh, 43: $Vi, 44: $Vj, 46: $Vk, 48: $Vl, 49: $Vm, 51: $Vn, 55: $Vo, 57: $Vp, 58: $Vq, 63: $Vr, 64: $Vs, 65: $Vt, 66: $Vu, 74: $Vv, 84: $V3 }, { 20: [1, 150] }, o($Vx, [2, 52]), { 20: [1, 151] }, o($Vx, [2, 54]), { 27: 152, 74: $Vv }, { 27: 153, 74: $Vv }, { 60: 154, 83: $VE }, { 60: 155, 83: $VE }, { 60: 156, 83: $VE }, { 68: [1, 157], 83: [2, 64] }, { 5: [2, 57] }, { 5: [2, 79] }, { 5: [2, 58] }, { 5: [2, 59] }, { 5: [2, 60] }, { 5: [1, 158] }, o($Vx, [2, 18]), o($Vy, [2, 11]), { 13: 159, 55: $Vo, 57: $Vp }, o($Vy, [2, 13]), o($Vy, [2, 14]), o($Vx, [2, 20]), o($Vx, [2, 36]), o($Vx, [2, 37]), o($Vx, [2, 38]), o($Vx, [2, 39]), { 20: [1, 160] }, o($Vx, [2, 40]), { 20: [1, 161] }, o($Vx, [2, 41]), o($Vx, [2, 42]), { 20: [1, 162] }, o($Vx, [2, 43]), { 5: [1, 163] }, { 5: [1, 164] }, { 60: 165, 83: $VE }, { 60: 166, 83: $VE }, { 5: [2, 69] }, { 5: [2, 55] }, { 5: [2, 56] }, { 27: 167, 74: $Vv }, o($VF, [2, 16]), o($Vy, [2, 12]), o($VA, $V4, { 8: 110, 45: 168 }), o($VB, $V4, { 8: 112, 47: 169 }), o($VC, $V4, { 8: 115, 50: 170 }), o($Vx, [2, 51]), o($Vx, [2, 53]), { 5: [2, 67] }, { 5: [2, 68] }, { 83: [2, 63] }, { 21: [2, 50] }, { 21: [2, 48] }, { 21: [2, 46] }],
    defaultActions: { 7: [2, 80], 8: [2, 1], 9: [2, 2], 10: [2, 3], 54: [2, 83], 91: [2, 65], 92: [2, 66], 99: [2, 82], 127: [2, 57], 128: [2, 79], 129: [2, 58], 130: [2, 59], 131: [2, 60], 154: [2, 69], 155: [2, 55], 156: [2, 56], 165: [2, 67], 166: [2, 68], 167: [2, 63], 168: [2, 50], 169: [2, 48], 170: [2, 46] },
    parseError: function parseError(str, hash) {
      if (hash.recoverable) {
        this.trace(str);
      } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
      }
    },
    parse: function parse(input) {
      var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, TERROR = 2, EOF = 1;
      var args = lstack.slice.call(arguments, 1);
      var lexer2 = Object.create(this.lexer);
      var sharedState = { yy: {} };
      for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
          sharedState.yy[k] = this.yy[k];
        }
      }
      lexer2.setInput(input, sharedState.yy);
      sharedState.yy.lexer = lexer2;
      sharedState.yy.parser = this;
      if (typeof lexer2.yylloc == "undefined") {
        lexer2.yylloc = {};
      }
      var yyloc = lexer2.yylloc;
      lstack.push(yyloc);
      var ranges = lexer2.options && lexer2.options.ranges;
      if (typeof sharedState.yy.parseError === "function") {
        this.parseError = sharedState.yy.parseError;
      } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
      }
      function lex() {
        var token;
        token = tstack.pop() || lexer2.lex() || EOF;
        if (typeof token !== "number") {
          if (token instanceof Array) {
            tstack = token;
            token = tstack.pop();
          }
          token = self.symbols_[token] || token;
        }
        return token;
      }
      var symbol, state, action, r, yyval = {}, p, len, newState, expected;
      while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol === null || typeof symbol == "undefined") {
            symbol = lex();
          }
          action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
          var errStr = "";
          expected = [];
          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push("'" + this.terminals_[p] + "'");
            }
          }
          if (lexer2.showPosition) {
            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
          } else {
            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
          }
          this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected
          });
        }
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(lexer2.yytext);
            lstack.push(lexer2.yylloc);
            stack.push(action[1]);
            symbol = null;
            {
              yyleng = lexer2.yyleng;
              yytext = lexer2.yytext;
              yylineno = lexer2.yylineno;
              yyloc = lexer2.yylloc;
            }
            break;
          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
              yyval._$.range = [
                lstack[lstack.length - (len || 1)].range[0],
                lstack[lstack.length - 1].range[1]
              ];
            }
            r = this.performAction.apply(yyval, [
              yytext,
              yyleng,
              yylineno,
              sharedState.yy,
              action[1],
              vstack,
              lstack
            ].concat(args));
            if (typeof r !== "undefined") {
              return r;
            }
            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  };
  var lexer = function() {
    var lexer2 = {
      EOF: 1,
      parseError: function parseError(str, hash) {
        if (this.yy.parser) {
          this.yy.parser.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      },
      // resets the lexer, sets new input
      setInput: function(input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      },
      // consumes and returns one char from the input
      input: function() {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return ch;
      },
      // unshifts one char (or a string) into the input
      unput: function(ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);
        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (lines.length - 1) {
          this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
        };
        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        this._more = true;
        return this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
        return this;
      },
      // retain first n characters of the match
      less: function(n) {
        this.unput(this.match.slice(n));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var next = this.match;
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }
        return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(match, indexed_rule) {
        var token, lines, backup;
        if (this.options.backtrack_lexer) {
          backup = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          };
          if (this.options.ranges) {
            backup.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno += lines.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (token) {
          return token;
        } else if (this._backtrack) {
          for (var k in backup) {
            this[k] = backup[k];
          }
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        var token, match, tempMatch, index;
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (this.options.backtrack_lexer) {
              token = this.test_match(tempMatch, rules[i]);
              if (token !== false) {
                return token;
              } else if (this._backtrack) {
                match = false;
                continue;
              } else {
                return false;
              }
            } else if (!this.options.flex) {
              break;
            }
          }
        }
        if (match) {
          token = this.test_match(match, rules[index]);
          if (token !== false) {
            return token;
          }
          return false;
        }
        if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      },
      // return next match that has a token
      lex: function lex() {
        var r = this.next();
        if (r) {
          return r;
        } else {
          return this.lex();
        }
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function begin(condition) {
        this.conditionStack.push(condition);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions["INITIAL"].rules;
        }
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
          return this.conditionStack[n];
        } else {
          return "INITIAL";
        }
      },
      // alias for begin(condition)
      pushState: function pushState(condition) {
        this.begin(condition);
      },
      // return the number of states currently on the stack
      stateStackSize: function stateStackSize() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        switch ($avoiding_name_collisions) {
          case 0:
            this.begin("open_directive");
            return 84;
          case 1:
            this.begin("type_directive");
            return 85;
          case 2:
            this.popState();
            this.begin("arg_directive");
            return 17;
          case 3:
            this.popState();
            this.popState();
            return 87;
          case 4:
            return 86;
          case 5:
            return 5;
          case 6:
            break;
          case 7:
            break;
          case 8:
            break;
          case 9:
            break;
          case 10:
            break;
          case 11:
            return 24;
          case 12:
            this.begin("LINE");
            return 19;
          case 13:
            this.begin("ID");
            return 55;
          case 14:
            this.begin("ID");
            return 57;
          case 15:
            yy_.yytext = yy_.yytext.trim();
            this.begin("ALIAS");
            return 74;
          case 16:
            this.popState();
            this.popState();
            this.begin("LINE");
            return 56;
          case 17:
            this.popState();
            this.popState();
            return 5;
          case 18:
            this.begin("LINE");
            return 41;
          case 19:
            this.begin("LINE");
            return 42;
          case 20:
            this.begin("LINE");
            return 43;
          case 21:
            this.begin("LINE");
            return 44;
          case 22:
            this.begin("LINE");
            return 54;
          case 23:
            this.begin("LINE");
            return 46;
          case 24:
            this.begin("LINE");
            return 48;
          case 25:
            this.begin("LINE");
            return 53;
          case 26:
            this.begin("LINE");
            return 49;
          case 27:
            this.begin("LINE");
            return 52;
          case 28:
            this.begin("LINE");
            return 51;
          case 29:
            this.popState();
            return 20;
          case 30:
            return 21;
          case 31:
            return 69;
          case 32:
            return 70;
          case 33:
            return 63;
          case 34:
            return 64;
          case 35:
            return 65;
          case 36:
            return 66;
          case 37:
            return 61;
          case 38:
            return 58;
          case 39:
            this.begin("ID");
            return 26;
          case 40:
            this.begin("ID");
            return 28;
          case 41:
            return 34;
          case 42:
            return 35;
          case 43:
            this.begin("acc_title");
            return 36;
          case 44:
            this.popState();
            return "acc_title_value";
          case 45:
            this.begin("acc_descr");
            return 38;
          case 46:
            this.popState();
            return "acc_descr_value";
          case 47:
            this.begin("acc_descr_multiline");
            break;
          case 48:
            this.popState();
            break;
          case 49:
            return "acc_descr_multiline_value";
          case 50:
            return 7;
          case 51:
            return 23;
          case 52:
            return 25;
          case 53:
            return 68;
          case 54:
            return 5;
          case 55:
            yy_.yytext = yy_.yytext.trim();
            return 74;
          case 56:
            return 77;
          case 57:
            return 78;
          case 58:
            return 75;
          case 59:
            return 76;
          case 60:
            return 79;
          case 61:
            return 80;
          case 62:
            return 81;
          case 63:
            return 82;
          case 64:
            return 83;
          case 65:
            return 72;
          case 66:
            return 73;
          case 67:
            return 5;
          case 68:
            return "INVALID";
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:((?!\n)\s)+)/i, /^(?:#[^\n]*)/i, /^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[0-9]+(?=[ \n]+))/i, /^(?:box\b)/i, /^(?:participant\b)/i, /^(?:actor\b)/i, /^(?:[^\->:\n,;]+?([\-]*[^\->:\n,;]+?)*?(?=((?!\n)\s)+as(?!\n)\s|[#\n;]|$))/i, /^(?:as\b)/i, /^(?:(?:))/i, /^(?:loop\b)/i, /^(?:rect\b)/i, /^(?:opt\b)/i, /^(?:alt\b)/i, /^(?:else\b)/i, /^(?:par\b)/i, /^(?:par_over\b)/i, /^(?:and\b)/i, /^(?:critical\b)/i, /^(?:option\b)/i, /^(?:break\b)/i, /^(?:(?:[:]?(?:no)?wrap)?[^#\n;]*)/i, /^(?:end\b)/i, /^(?:left of\b)/i, /^(?:right of\b)/i, /^(?:links\b)/i, /^(?:link\b)/i, /^(?:properties\b)/i, /^(?:details\b)/i, /^(?:over\b)/i, /^(?:note\b)/i, /^(?:activate\b)/i, /^(?:deactivate\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:title:\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:sequenceDiagram\b)/i, /^(?:autonumber\b)/i, /^(?:off\b)/i, /^(?:,)/i, /^(?:;)/i, /^(?:[^\+\->:\n,;]+((?!(-x|--x|-\)|--\)))[\-]*[^\+\->:\n,;]+)*)/i, /^(?:->>)/i, /^(?:-->>)/i, /^(?:->)/i, /^(?:-->)/i, /^(?:-[x])/i, /^(?:--[x])/i, /^(?:-[\)])/i, /^(?:--[\)])/i, /^(?::(?:(?:no)?wrap)?[^#\n;]+)/i, /^(?:\+)/i, /^(?:-)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { "acc_descr_multiline": { "rules": [48, 49], "inclusive": false }, "acc_descr": { "rules": [46], "inclusive": false }, "acc_title": { "rules": [44], "inclusive": false }, "open_directive": { "rules": [1, 8], "inclusive": false }, "type_directive": { "rules": [2, 3, 8], "inclusive": false }, "arg_directive": { "rules": [3, 4, 8], "inclusive": false }, "ID": { "rules": [7, 8, 15], "inclusive": false }, "ALIAS": { "rules": [7, 8, 16, 17], "inclusive": false }, "LINE": { "rules": [7, 8, 29], "inclusive": false }, "INITIAL": { "rules": [0, 5, 6, 8, 9, 10, 11, 12, 13, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 47, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68], "inclusive": true } }
    };
    return lexer2;
  }();
  parser2.lexer = lexer;
  function Parser() {
    this.yy = {};
  }
  Parser.prototype = parser2;
  parser2.Parser = Parser;
  return new Parser();
}();
parser.parser = parser;
const parser$1 = parser;
let prevActor = void 0;
let actors = {};
let boxes = [];
let messages = [];
let sequenceNumbersEnabled = false;
let wrapEnabled;
let currentBox = void 0;
const parseDirective = function(statement, context, type) {
  mermaidAPI.parseDirective(this, statement, context, type);
};
const addBox = function(data) {
  boxes.push({
    name: data.text,
    wrap: data.wrap === void 0 && autoWrap() || !!data.wrap,
    fill: data.color,
    actorKeys: []
  });
  currentBox = boxes.slice(-1)[0];
};
const addActor = function(id, name, description, type) {
  let assignedBox = currentBox;
  const old = actors[id];
  if (old) {
    if (currentBox && old.box && currentBox !== old.box) {
      throw new Error(
        "A same participant should only be defined in one Box: " + old.name + " can't be in '" + old.box.name + "' and in '" + currentBox.name + "' at the same time."
      );
    }
    assignedBox = old.box ? old.box : currentBox;
    old.box = assignedBox;
    if (old && name === old.name && description == null) {
      return;
    }
  }
  if (description == null || description.text == null) {
    description = { text: name, wrap: null, type };
  }
  if (type == null || description.text == null) {
    description = { text: name, wrap: null, type };
  }
  actors[id] = {
    box: assignedBox,
    name,
    description: description.text,
    wrap: description.wrap === void 0 && autoWrap() || !!description.wrap,
    prevActor,
    links: {},
    properties: {},
    actorCnt: null,
    rectData: null,
    type: type || "participant"
  };
  if (prevActor && actors[prevActor]) {
    actors[prevActor].nextActor = id;
  }
  if (currentBox) {
    currentBox.actorKeys.push(id);
  }
  prevActor = id;
};
const activationCount = (part) => {
  let i;
  let count = 0;
  for (i = 0; i < messages.length; i++) {
    if (messages[i].type === LINETYPE.ACTIVE_START && messages[i].from.actor === part) {
      count++;
    }
    if (messages[i].type === LINETYPE.ACTIVE_END && messages[i].from.actor === part) {
      count--;
    }
  }
  return count;
};
const addMessage = function(idFrom, idTo, message, answer) {
  messages.push({
    from: idFrom,
    to: idTo,
    message: message.text,
    wrap: message.wrap === void 0 && autoWrap() || !!message.wrap,
    answer
  });
};
const addSignal = function(idFrom, idTo, message = { text: void 0, wrap: void 0 }, messageType) {
  if (messageType === LINETYPE.ACTIVE_END) {
    const cnt = activationCount(idFrom.actor);
    if (cnt < 1) {
      let error = new Error("Trying to inactivate an inactive participant (" + idFrom.actor + ")");
      error.hash = {
        text: "->>-",
        token: "->>-",
        line: "1",
        loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
        expected: ["'ACTIVE_PARTICIPANT'"]
      };
      throw error;
    }
  }
  messages.push({
    from: idFrom,
    to: idTo,
    message: message.text,
    wrap: message.wrap === void 0 && autoWrap() || !!message.wrap,
    type: messageType
  });
  return true;
};
const hasAtLeastOneBox = function() {
  return boxes.length > 0;
};
const hasAtLeastOneBoxWithTitle = function() {
  return boxes.some((b) => b.name);
};
const getMessages = function() {
  return messages;
};
const getBoxes = function() {
  return boxes;
};
const getActors = function() {
  return actors;
};
const getActor = function(id) {
  return actors[id];
};
const getActorKeys = function() {
  return Object.keys(actors);
};
const enableSequenceNumbers = function() {
  sequenceNumbersEnabled = true;
};
const disableSequenceNumbers = function() {
  sequenceNumbersEnabled = false;
};
const showSequenceNumbers = () => sequenceNumbersEnabled;
const setWrap = function(wrapSetting) {
  wrapEnabled = wrapSetting;
};
const autoWrap = () => {
  if (wrapEnabled !== void 0) {
    return wrapEnabled;
  }
  return getConfig().sequence.wrap;
};
const clear = function() {
  actors = {};
  boxes = [];
  messages = [];
  sequenceNumbersEnabled = false;
  clear$1();
};
const parseMessage = function(str) {
  const _str = str.trim();
  const message = {
    text: _str.replace(/^:?(?:no)?wrap:/, "").trim(),
    wrap: _str.match(/^:?wrap:/) !== null ? true : _str.match(/^:?nowrap:/) !== null ? false : void 0
  };
  log.debug("parseMessage:", message);
  return message;
};
const parseBoxData = function(str) {
  const match = str.match(/^((?:rgba?|hsla?)\s*\(.*\)|\w*)(.*)$/);
  let color = match != null && match[1] ? match[1].trim() : "transparent";
  let title = match != null && match[2] ? match[2].trim() : void 0;
  if (window && window.CSS) {
    if (!window.CSS.supports("color", color)) {
      color = "transparent";
      title = str.trim();
    }
  } else {
    const style = new Option().style;
    style.color = color;
    if (style.color !== color) {
      color = "transparent";
      title = str.trim();
    }
  }
  const boxData = {
    color,
    text: title !== void 0 ? sanitizeText(title.replace(/^:?(?:no)?wrap:/, ""), getConfig()) : void 0,
    wrap: title !== void 0 ? title.match(/^:?wrap:/) !== null ? true : title.match(/^:?nowrap:/) !== null ? false : void 0 : void 0
  };
  return boxData;
};
const LINETYPE = {
  SOLID: 0,
  DOTTED: 1,
  NOTE: 2,
  SOLID_CROSS: 3,
  DOTTED_CROSS: 4,
  SOLID_OPEN: 5,
  DOTTED_OPEN: 6,
  LOOP_START: 10,
  LOOP_END: 11,
  ALT_START: 12,
  ALT_ELSE: 13,
  ALT_END: 14,
  OPT_START: 15,
  OPT_END: 16,
  ACTIVE_START: 17,
  ACTIVE_END: 18,
  PAR_START: 19,
  PAR_AND: 20,
  PAR_END: 21,
  RECT_START: 22,
  RECT_END: 23,
  SOLID_POINT: 24,
  DOTTED_POINT: 25,
  AUTONUMBER: 26,
  CRITICAL_START: 27,
  CRITICAL_OPTION: 28,
  CRITICAL_END: 29,
  BREAK_START: 30,
  BREAK_END: 31,
  PAR_OVER_START: 32
};
const ARROWTYPE = {
  FILLED: 0,
  OPEN: 1
};
const PLACEMENT = {
  LEFTOF: 0,
  RIGHTOF: 1,
  OVER: 2
};
const addNote = function(actor, placement, message) {
  ({
    actor,
    placement,
    message: message.text,
    wrap: message.wrap === void 0 && autoWrap() || !!message.wrap
  });
  const actors2 = [].concat(actor, actor);
  messages.push({
    from: actors2[0],
    to: actors2[1],
    message: message.text,
    wrap: message.wrap === void 0 && autoWrap() || !!message.wrap,
    type: LINETYPE.NOTE,
    placement
  });
};
const addLinks = function(actorId, text) {
  const actor = getActor(actorId);
  try {
    let sanitizedText = sanitizeText(text.text, getConfig());
    sanitizedText = sanitizedText.replace(/&amp;/g, "&");
    sanitizedText = sanitizedText.replace(/&equals;/g, "=");
    const links = JSON.parse(sanitizedText);
    insertLinks(actor, links);
  } catch (e) {
    log.error("error while parsing actor link text", e);
  }
};
const addALink = function(actorId, text) {
  const actor = getActor(actorId);
  try {
    const links = {};
    let sanitizedText = sanitizeText(text.text, getConfig());
    var sep = sanitizedText.indexOf("@");
    sanitizedText = sanitizedText.replace(/&amp;/g, "&");
    sanitizedText = sanitizedText.replace(/&equals;/g, "=");
    var label = sanitizedText.slice(0, sep - 1).trim();
    var link = sanitizedText.slice(sep + 1).trim();
    links[label] = link;
    insertLinks(actor, links);
  } catch (e) {
    log.error("error while parsing actor link text", e);
  }
};
function insertLinks(actor, links) {
  if (actor.links == null) {
    actor.links = links;
  } else {
    for (let key in links) {
      actor.links[key] = links[key];
    }
  }
}
const addProperties = function(actorId, text) {
  const actor = getActor(actorId);
  try {
    let sanitizedText = sanitizeText(text.text, getConfig());
    const properties = JSON.parse(sanitizedText);
    insertProperties(actor, properties);
  } catch (e) {
    log.error("error while parsing actor properties text", e);
  }
};
function insertProperties(actor, properties) {
  if (actor.properties == null) {
    actor.properties = properties;
  } else {
    for (let key in properties) {
      actor.properties[key] = properties[key];
    }
  }
}
function boxEnd() {
  currentBox = void 0;
}
const addDetails = function(actorId, text) {
  const actor = getActor(actorId);
  const elem = document.getElementById(text.text);
  try {
    const text2 = elem.innerHTML;
    const details = JSON.parse(text2);
    if (details["properties"]) {
      insertProperties(actor, details["properties"]);
    }
    if (details["links"]) {
      insertLinks(actor, details["links"]);
    }
  } catch (e) {
    log.error("error while parsing actor details text", e);
  }
};
const getActorProperty = function(actor, key) {
  if (actor !== void 0 && actor.properties !== void 0) {
    return actor.properties[key];
  }
  return void 0;
};
const apply = function(param) {
  if (Array.isArray(param)) {
    param.forEach(function(item) {
      apply(item);
    });
  } else {
    switch (param.type) {
      case "sequenceIndex":
        messages.push({
          from: void 0,
          to: void 0,
          message: {
            start: param.sequenceIndex,
            step: param.sequenceIndexStep,
            visible: param.sequenceVisible
          },
          wrap: false,
          type: param.signalType
        });
        break;
      case "addParticipant":
        addActor(param.actor, param.actor, param.description, "participant");
        break;
      case "addActor":
        addActor(param.actor, param.actor, param.description, "actor");
        break;
      case "activeStart":
        addSignal(param.actor, void 0, void 0, param.signalType);
        break;
      case "activeEnd":
        addSignal(param.actor, void 0, void 0, param.signalType);
        break;
      case "addNote":
        addNote(param.actor, param.placement, param.text);
        break;
      case "addLinks":
        addLinks(param.actor, param.text);
        break;
      case "addALink":
        addALink(param.actor, param.text);
        break;
      case "addProperties":
        addProperties(param.actor, param.text);
        break;
      case "addDetails":
        addDetails(param.actor, param.text);
        break;
      case "addMessage":
        addSignal(param.from, param.to, param.msg, param.signalType);
        break;
      case "boxStart":
        addBox(param.boxData);
        break;
      case "boxEnd":
        boxEnd();
        break;
      case "loopStart":
        addSignal(void 0, void 0, param.loopText, param.signalType);
        break;
      case "loopEnd":
        addSignal(void 0, void 0, void 0, param.signalType);
        break;
      case "rectStart":
        addSignal(void 0, void 0, param.color, param.signalType);
        break;
      case "rectEnd":
        addSignal(void 0, void 0, void 0, param.signalType);
        break;
      case "optStart":
        addSignal(void 0, void 0, param.optText, param.signalType);
        break;
      case "optEnd":
        addSignal(void 0, void 0, void 0, param.signalType);
        break;
      case "altStart":
        addSignal(void 0, void 0, param.altText, param.signalType);
        break;
      case "else":
        addSignal(void 0, void 0, param.altText, param.signalType);
        break;
      case "altEnd":
        addSignal(void 0, void 0, void 0, param.signalType);
        break;
      case "setAccTitle":
        setAccTitle(param.text);
        break;
      case "parStart":
        addSignal(void 0, void 0, param.parText, param.signalType);
        break;
      case "and":
        addSignal(void 0, void 0, param.parText, param.signalType);
        break;
      case "parEnd":
        addSignal(void 0, void 0, void 0, param.signalType);
        break;
      case "criticalStart":
        addSignal(void 0, void 0, param.criticalText, param.signalType);
        break;
      case "option":
        addSignal(void 0, void 0, param.optionText, param.signalType);
        break;
      case "criticalEnd":
        addSignal(void 0, void 0, void 0, param.signalType);
        break;
      case "breakStart":
        addSignal(void 0, void 0, param.breakText, param.signalType);
        break;
      case "breakEnd":
        addSignal(void 0, void 0, void 0, param.signalType);
        break;
    }
  }
};
const db = {
  addActor,
  addMessage,
  addSignal,
  addLinks,
  addDetails,
  addProperties,
  autoWrap,
  setWrap,
  enableSequenceNumbers,
  disableSequenceNumbers,
  showSequenceNumbers,
  getMessages,
  getActors,
  getActor,
  getActorKeys,
  getActorProperty,
  getAccTitle,
  getBoxes,
  getDiagramTitle,
  setDiagramTitle,
  parseDirective,
  getConfig: () => getConfig().sequence,
  clear,
  parseMessage,
  parseBoxData,
  LINETYPE,
  ARROWTYPE,
  PLACEMENT,
  addNote,
  setAccTitle,
  apply,
  setAccDescription,
  getAccDescription,
  hasAtLeastOneBox,
  hasAtLeastOneBoxWithTitle
};
const getStyles = (options) => `.actor {
    stroke: ${options.actorBorder};
    fill: ${options.actorBkg};
  }

  text.actor > tspan {
    fill: ${options.actorTextColor};
    stroke: none;
  }

  .actor-line {
    stroke: ${options.actorLineColor};
  }

  .messageLine0 {
    stroke-width: 1.5;
    stroke-dasharray: none;
    stroke: ${options.signalColor};
  }

  .messageLine1 {
    stroke-width: 1.5;
    stroke-dasharray: 2, 2;
    stroke: ${options.signalColor};
  }

  #arrowhead path {
    fill: ${options.signalColor};
    stroke: ${options.signalColor};
  }

  .sequenceNumber {
    fill: ${options.sequenceNumberColor};
  }

  #sequencenumber {
    fill: ${options.signalColor};
  }

  #crosshead path {
    fill: ${options.signalColor};
    stroke: ${options.signalColor};
  }

  .messageText {
    fill: ${options.signalTextColor};
    stroke: none;
  }

  .labelBox {
    stroke: ${options.labelBoxBorderColor};
    fill: ${options.labelBoxBkgColor};
  }

  .labelText, .labelText > tspan {
    fill: ${options.labelTextColor};
    stroke: none;
  }

  .loopText, .loopText > tspan {
    fill: ${options.loopTextColor};
    stroke: none;
  }

  .loopLine {
    stroke-width: 2px;
    stroke-dasharray: 2, 2;
    stroke: ${options.labelBoxBorderColor};
    fill: ${options.labelBoxBorderColor};
  }

  .note {
    //stroke: #decc93;
    stroke: ${options.noteBorderColor};
    fill: ${options.noteBkgColor};
  }

  .noteText, .noteText > tspan {
    fill: ${options.noteTextColor};
    stroke: none;
  }

  .activation0 {
    fill: ${options.activationBkgColor};
    stroke: ${options.activationBorderColor};
  }

  .activation1 {
    fill: ${options.activationBkgColor};
    stroke: ${options.activationBorderColor};
  }

  .activation2 {
    fill: ${options.activationBkgColor};
    stroke: ${options.activationBorderColor};
  }

  .actorPopupMenu {
    position: absolute;
  }

  .actorPopupMenuPanel {
    position: absolute;
    fill: ${options.actorBkg};
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
}
  .actor-man line {
    stroke: ${options.actorBorder};
    fill: ${options.actorBkg};
  }
  .actor-man circle, line {
    stroke: ${options.actorBorder};
    fill: ${options.actorBkg};
    stroke-width: 2px;
  }
`;
const styles = getStyles;
const drawRect = function(elem, rectData) {
  return drawRect$1(elem, rectData);
};
const addPopupInteraction = (id, actorCnt2) => {
  addFunction(() => {
    const arr = document.querySelectorAll(id);
    if (arr.length === 0) {
      return;
    }
    arr[0].addEventListener("mouseover", function() {
      popupMenuUpFunc("actor" + actorCnt2 + "_popup");
    });
    arr[0].addEventListener("mouseout", function() {
      popupMenuDownFunc("actor" + actorCnt2 + "_popup");
    });
  });
};
const drawPopup = function(elem, actor, minMenuWidth, textAttrs, forceMenus) {
  if (actor.links === void 0 || actor.links === null || Object.keys(actor.links).length === 0) {
    return { height: 0, width: 0 };
  }
  const links = actor.links;
  const actorCnt2 = actor.actorCnt;
  const rectData = actor.rectData;
  var displayValue = "none";
  if (forceMenus) {
    displayValue = "block !important";
  }
  const g = elem.append("g");
  g.attr("id", "actor" + actorCnt2 + "_popup");
  g.attr("class", "actorPopupMenu");
  g.attr("display", displayValue);
  addPopupInteraction("#actor" + actorCnt2 + "_popup", actorCnt2);
  var actorClass = "";
  if (rectData.class !== void 0) {
    actorClass = " " + rectData.class;
  }
  let menuWidth = rectData.width > minMenuWidth ? rectData.width : minMenuWidth;
  const rectElem = g.append("rect");
  rectElem.attr("class", "actorPopupMenuPanel" + actorClass);
  rectElem.attr("x", rectData.x);
  rectElem.attr("y", rectData.height);
  rectElem.attr("fill", rectData.fill);
  rectElem.attr("stroke", rectData.stroke);
  rectElem.attr("width", menuWidth);
  rectElem.attr("height", rectData.height);
  rectElem.attr("rx", rectData.rx);
  rectElem.attr("ry", rectData.ry);
  if (links != null) {
    var linkY = 20;
    for (let key in links) {
      var linkElem = g.append("a");
      var sanitizedLink = sanitizeUrl_1(links[key]);
      linkElem.attr("xlink:href", sanitizedLink);
      linkElem.attr("target", "_blank");
      _drawMenuItemTextCandidateFunc(textAttrs)(
        key,
        linkElem,
        rectData.x + 10,
        rectData.height + linkY,
        menuWidth,
        20,
        { class: "actor" },
        textAttrs
      );
      linkY += 30;
    }
  }
  rectElem.attr("height", linkY);
  return { height: rectData.height + linkY, width: menuWidth };
};
const popupMenu = function(popid) {
  return "var pu = document.getElementById('" + popid + "'); if (pu != null) { pu.style.display = 'block'; }";
};
const popdownMenu = function(popid) {
  return "var pu = document.getElementById('" + popid + "'); if (pu != null) { pu.style.display = 'none'; }";
};
const popupMenuUpFunc = function(popupId) {
  var pu = document.getElementById(popupId);
  if (pu != null) {
    pu.style.display = "block";
  }
};
const popupMenuDownFunc = function(popupId) {
  var pu = document.getElementById(popupId);
  if (pu != null) {
    pu.style.display = "none";
  }
};
const drawText = function(elem, textData) {
  let prevTextHeight = 0;
  let textHeight = 0;
  const lines = textData.text.split(common.lineBreakRegex);
  const [_textFontSize, _textFontSizePx] = parseFontSize(textData.fontSize);
  let textElems = [];
  let dy = 0;
  let yfunc = () => textData.y;
  if (textData.valign !== void 0 && textData.textMargin !== void 0 && textData.textMargin > 0) {
    switch (textData.valign) {
      case "top":
      case "start":
        yfunc = () => Math.round(textData.y + textData.textMargin);
        break;
      case "middle":
      case "center":
        yfunc = () => Math.round(textData.y + (prevTextHeight + textHeight + textData.textMargin) / 2);
        break;
      case "bottom":
      case "end":
        yfunc = () => Math.round(
          textData.y + (prevTextHeight + textHeight + 2 * textData.textMargin) - textData.textMargin
        );
        break;
    }
  }
  if (textData.anchor !== void 0 && textData.textMargin !== void 0 && textData.width !== void 0) {
    switch (textData.anchor) {
      case "left":
      case "start":
        textData.x = Math.round(textData.x + textData.textMargin);
        textData.anchor = "start";
        textData.dominantBaseline = "middle";
        textData.alignmentBaseline = "middle";
        break;
      case "middle":
      case "center":
        textData.x = Math.round(textData.x + textData.width / 2);
        textData.anchor = "middle";
        textData.dominantBaseline = "middle";
        textData.alignmentBaseline = "middle";
        break;
      case "right":
      case "end":
        textData.x = Math.round(textData.x + textData.width - textData.textMargin);
        textData.anchor = "end";
        textData.dominantBaseline = "middle";
        textData.alignmentBaseline = "middle";
        break;
    }
  }
  for (let [i, line] of lines.entries()) {
    if (textData.textMargin !== void 0 && textData.textMargin === 0 && _textFontSize !== void 0) {
      dy = i * _textFontSize;
    }
    const textElem = elem.append("text");
    textElem.attr("x", textData.x);
    textElem.attr("y", yfunc());
    if (textData.anchor !== void 0) {
      textElem.attr("text-anchor", textData.anchor).attr("dominant-baseline", textData.dominantBaseline).attr("alignment-baseline", textData.alignmentBaseline);
    }
    if (textData.fontFamily !== void 0) {
      textElem.style("font-family", textData.fontFamily);
    }
    if (_textFontSizePx !== void 0) {
      textElem.style("font-size", _textFontSizePx);
    }
    if (textData.fontWeight !== void 0) {
      textElem.style("font-weight", textData.fontWeight);
    }
    if (textData.fill !== void 0) {
      textElem.attr("fill", textData.fill);
    }
    if (textData.class !== void 0) {
      textElem.attr("class", textData.class);
    }
    if (textData.dy !== void 0) {
      textElem.attr("dy", textData.dy);
    } else if (dy !== 0) {
      textElem.attr("dy", dy);
    }
    const text = line || ZERO_WIDTH_SPACE;
    if (textData.tspan) {
      const span = textElem.append("tspan");
      span.attr("x", textData.x);
      if (textData.fill !== void 0) {
        span.attr("fill", textData.fill);
      }
      span.text(text);
    } else {
      textElem.text(text);
    }
    if (textData.valign !== void 0 && textData.textMargin !== void 0 && textData.textMargin > 0) {
      textHeight += (textElem._groups || textElem)[0][0].getBBox().height;
      prevTextHeight = textHeight;
    }
    textElems.push(textElem);
  }
  return textElems;
};
const drawLabel = function(elem, txtObject) {
  function genPoints(x, y, width, height, cut) {
    return x + "," + y + " " + (x + width) + "," + y + " " + (x + width) + "," + (y + height - cut) + " " + (x + width - cut * 1.2) + "," + (y + height) + " " + x + "," + (y + height);
  }
  const polygon = elem.append("polygon");
  polygon.attr("points", genPoints(txtObject.x, txtObject.y, txtObject.width, txtObject.height, 7));
  polygon.attr("class", "labelBox");
  txtObject.y = txtObject.y + txtObject.height / 2;
  drawText(elem, txtObject);
  return polygon;
};
let actorCnt = -1;
const fixLifeLineHeights = (diagram2, bounds2) => {
  if (!diagram2.selectAll) {
    return;
  }
  diagram2.selectAll(".actor-line").attr("class", "200").attr("y2", bounds2 - 55);
};
const drawActorTypeParticipant = function(elem, actor, conf2, isFooter) {
  const center = actor.x + actor.width / 2;
  const centerY = actor.y + 5;
  const boxpluslineGroup = elem.append("g");
  var g = boxpluslineGroup;
  if (!isFooter) {
    actorCnt++;
    g.append("line").attr("id", "actor" + actorCnt).attr("x1", center).attr("y1", centerY).attr("x2", center).attr("y2", 2e3).attr("class", "actor-line").attr("stroke-width", "0.5px").attr("stroke", "#999");
    g = boxpluslineGroup.append("g");
    actor.actorCnt = actorCnt;
    if (actor.links != null) {
      g.attr("id", "root-" + actorCnt);
      addPopupInteraction("#root-" + actorCnt, actorCnt);
    }
  }
  const rect = getNoteRect$1();
  var cssclass = "actor";
  if (actor.properties != null && actor.properties["class"]) {
    cssclass = actor.properties["class"];
  } else {
    rect.fill = "#eaeaea";
  }
  rect.x = actor.x;
  rect.y = actor.y;
  rect.width = actor.width;
  rect.height = actor.height;
  rect.class = cssclass;
  rect.rx = 3;
  rect.ry = 3;
  const rectElem = drawRect(g, rect);
  actor.rectData = rect;
  if (actor.properties != null && actor.properties["icon"]) {
    const iconSrc = actor.properties["icon"].trim();
    if (iconSrc.charAt(0) === "@") {
      drawEmbeddedImage(g, rect.x + rect.width - 20, rect.y + 10, iconSrc.substr(1));
    } else {
      drawImage(g, rect.x + rect.width - 20, rect.y + 10, iconSrc);
    }
  }
  _drawTextCandidateFunc(conf2)(
    actor.description,
    g,
    rect.x,
    rect.y,
    rect.width,
    rect.height,
    { class: "actor" },
    conf2
  );
  let height = actor.height;
  if (rectElem.node) {
    const bounds2 = rectElem.node().getBBox();
    actor.height = bounds2.height;
    height = bounds2.height;
  }
  return height;
};
const drawActorTypeActor = function(elem, actor, conf2, isFooter) {
  const center = actor.x + actor.width / 2;
  const centerY = actor.y + 80;
  if (!isFooter) {
    actorCnt++;
    elem.append("line").attr("id", "actor" + actorCnt).attr("x1", center).attr("y1", centerY).attr("x2", center).attr("y2", 2e3).attr("class", "actor-line").attr("stroke-width", "0.5px").attr("stroke", "#999");
  }
  const actElem = elem.append("g");
  actElem.attr("class", "actor-man");
  const rect = getNoteRect$1();
  rect.x = actor.x;
  rect.y = actor.y;
  rect.fill = "#eaeaea";
  rect.width = actor.width;
  rect.height = actor.height;
  rect.class = "actor";
  rect.rx = 3;
  rect.ry = 3;
  actElem.append("line").attr("id", "actor-man-torso" + actorCnt).attr("x1", center).attr("y1", actor.y + 25).attr("x2", center).attr("y2", actor.y + 45);
  actElem.append("line").attr("id", "actor-man-arms" + actorCnt).attr("x1", center - 18).attr("y1", actor.y + 33).attr("x2", center + 18).attr("y2", actor.y + 33);
  actElem.append("line").attr("x1", center - 18).attr("y1", actor.y + 60).attr("x2", center).attr("y2", actor.y + 45);
  actElem.append("line").attr("x1", center).attr("y1", actor.y + 45).attr("x2", center + 16).attr("y2", actor.y + 60);
  const circle = actElem.append("circle");
  circle.attr("cx", actor.x + actor.width / 2);
  circle.attr("cy", actor.y + 10);
  circle.attr("r", 15);
  circle.attr("width", actor.width);
  circle.attr("height", actor.height);
  const bounds2 = actElem.node().getBBox();
  actor.height = bounds2.height;
  _drawTextCandidateFunc(conf2)(
    actor.description,
    actElem,
    rect.x,
    rect.y + 35,
    rect.width,
    rect.height,
    { class: "actor" },
    conf2
  );
  return actor.height;
};
const drawActor = function(elem, actor, conf2, isFooter) {
  switch (actor.type) {
    case "actor":
      return drawActorTypeActor(elem, actor, conf2, isFooter);
    case "participant":
      return drawActorTypeParticipant(elem, actor, conf2, isFooter);
  }
};
const drawBox = function(elem, box, conf2) {
  const boxplustextGroup = elem.append("g");
  const g = boxplustextGroup;
  drawBackgroundRect(g, box);
  if (box.name) {
    _drawTextCandidateFunc(conf2)(
      box.name,
      g,
      box.x,
      box.y + (box.textMaxHeight || 0) / 2,
      box.width,
      0,
      { class: "text" },
      conf2
    );
  }
  g.lower();
};
const anchorElement = function(elem) {
  return elem.append("g");
};
const drawActivation = function(elem, bounds2, verticalPos, conf2, actorActivations2) {
  const rect = getNoteRect$1();
  const g = bounds2.anchored;
  rect.x = bounds2.startx;
  rect.y = bounds2.starty;
  rect.class = "activation" + actorActivations2 % 3;
  rect.width = bounds2.stopx - bounds2.startx;
  rect.height = verticalPos - bounds2.starty;
  drawRect(g, rect);
};
const drawLoop = function(elem, loopModel, labelText, conf2) {
  const {
    boxMargin,
    boxTextMargin,
    labelBoxHeight,
    labelBoxWidth,
    messageFontFamily: fontFamily,
    messageFontSize: fontSize,
    messageFontWeight: fontWeight
  } = conf2;
  const g = elem.append("g");
  const drawLoopLine = function(startx, starty, stopx, stopy) {
    return g.append("line").attr("x1", startx).attr("y1", starty).attr("x2", stopx).attr("y2", stopy).attr("class", "loopLine");
  };
  drawLoopLine(loopModel.startx, loopModel.starty, loopModel.stopx, loopModel.starty);
  drawLoopLine(loopModel.stopx, loopModel.starty, loopModel.stopx, loopModel.stopy);
  drawLoopLine(loopModel.startx, loopModel.stopy, loopModel.stopx, loopModel.stopy);
  drawLoopLine(loopModel.startx, loopModel.starty, loopModel.startx, loopModel.stopy);
  if (loopModel.sections !== void 0) {
    loopModel.sections.forEach(function(item) {
      drawLoopLine(loopModel.startx, item.y, loopModel.stopx, item.y).style(
        "stroke-dasharray",
        "3, 3"
      );
    });
  }
  let txt = getTextObj$1();
  txt.text = labelText;
  txt.x = loopModel.startx;
  txt.y = loopModel.starty;
  txt.fontFamily = fontFamily;
  txt.fontSize = fontSize;
  txt.fontWeight = fontWeight;
  txt.anchor = "middle";
  txt.valign = "middle";
  txt.tspan = false;
  txt.width = labelBoxWidth || 50;
  txt.height = labelBoxHeight || 20;
  txt.textMargin = boxTextMargin;
  txt.class = "labelText";
  drawLabel(g, txt);
  txt = getTextObj();
  txt.text = loopModel.title;
  txt.x = loopModel.startx + labelBoxWidth / 2 + (loopModel.stopx - loopModel.startx) / 2;
  txt.y = loopModel.starty + boxMargin + boxTextMargin;
  txt.anchor = "middle";
  txt.valign = "middle";
  txt.textMargin = boxTextMargin;
  txt.class = "loopText";
  txt.fontFamily = fontFamily;
  txt.fontSize = fontSize;
  txt.fontWeight = fontWeight;
  txt.wrap = true;
  let textElem = drawText(g, txt);
  if (loopModel.sectionTitles !== void 0) {
    loopModel.sectionTitles.forEach(function(item, idx) {
      if (item.message) {
        txt.text = item.message;
        txt.x = loopModel.startx + (loopModel.stopx - loopModel.startx) / 2;
        txt.y = loopModel.sections[idx].y + boxMargin + boxTextMargin;
        txt.class = "loopText";
        txt.anchor = "middle";
        txt.valign = "middle";
        txt.tspan = false;
        txt.fontFamily = fontFamily;
        txt.fontSize = fontSize;
        txt.fontWeight = fontWeight;
        txt.wrap = loopModel.wrap;
        textElem = drawText(g, txt);
        let sectionHeight = Math.round(
          textElem.map((te) => (te._groups || te)[0][0].getBBox().height).reduce((acc, curr) => acc + curr)
        );
        loopModel.sections[idx].height += sectionHeight - (boxMargin + boxTextMargin);
      }
    });
  }
  loopModel.height = Math.round(loopModel.stopy - loopModel.starty);
  return g;
};
const drawBackgroundRect = function(elem, bounds2) {
  drawBackgroundRect$1(elem, bounds2);
};
const insertDatabaseIcon = function(elem) {
  elem.append("defs").append("symbol").attr("id", "database").attr("fill-rule", "evenodd").attr("clip-rule", "evenodd").append("path").attr("transform", "scale(.5)").attr(
    "d",
    "M12.258.001l.256.004.255.005.253.008.251.01.249.012.247.015.246.016.242.019.241.02.239.023.236.024.233.027.231.028.229.031.225.032.223.034.22.036.217.038.214.04.211.041.208.043.205.045.201.046.198.048.194.05.191.051.187.053.183.054.18.056.175.057.172.059.168.06.163.061.16.063.155.064.15.066.074.033.073.033.071.034.07.034.069.035.068.035.067.035.066.035.064.036.064.036.062.036.06.036.06.037.058.037.058.037.055.038.055.038.053.038.052.038.051.039.05.039.048.039.047.039.045.04.044.04.043.04.041.04.04.041.039.041.037.041.036.041.034.041.033.042.032.042.03.042.029.042.027.042.026.043.024.043.023.043.021.043.02.043.018.044.017.043.015.044.013.044.012.044.011.045.009.044.007.045.006.045.004.045.002.045.001.045v17l-.001.045-.002.045-.004.045-.006.045-.007.045-.009.044-.011.045-.012.044-.013.044-.015.044-.017.043-.018.044-.02.043-.021.043-.023.043-.024.043-.026.043-.027.042-.029.042-.03.042-.032.042-.033.042-.034.041-.036.041-.037.041-.039.041-.04.041-.041.04-.043.04-.044.04-.045.04-.047.039-.048.039-.05.039-.051.039-.052.038-.053.038-.055.038-.055.038-.058.037-.058.037-.06.037-.06.036-.062.036-.064.036-.064.036-.066.035-.067.035-.068.035-.069.035-.07.034-.071.034-.073.033-.074.033-.15.066-.155.064-.16.063-.163.061-.168.06-.172.059-.175.057-.18.056-.183.054-.187.053-.191.051-.194.05-.198.048-.201.046-.205.045-.208.043-.211.041-.214.04-.217.038-.22.036-.223.034-.225.032-.229.031-.231.028-.233.027-.236.024-.239.023-.241.02-.242.019-.246.016-.247.015-.249.012-.251.01-.253.008-.255.005-.256.004-.258.001-.258-.001-.256-.004-.255-.005-.253-.008-.251-.01-.249-.012-.247-.015-.245-.016-.243-.019-.241-.02-.238-.023-.236-.024-.234-.027-.231-.028-.228-.031-.226-.032-.223-.034-.22-.036-.217-.038-.214-.04-.211-.041-.208-.043-.204-.045-.201-.046-.198-.048-.195-.05-.19-.051-.187-.053-.184-.054-.179-.056-.176-.057-.172-.059-.167-.06-.164-.061-.159-.063-.155-.064-.151-.066-.074-.033-.072-.033-.072-.034-.07-.034-.069-.035-.068-.035-.067-.035-.066-.035-.064-.036-.063-.036-.062-.036-.061-.036-.06-.037-.058-.037-.057-.037-.056-.038-.055-.038-.053-.038-.052-.038-.051-.039-.049-.039-.049-.039-.046-.039-.046-.04-.044-.04-.043-.04-.041-.04-.04-.041-.039-.041-.037-.041-.036-.041-.034-.041-.033-.042-.032-.042-.03-.042-.029-.042-.027-.042-.026-.043-.024-.043-.023-.043-.021-.043-.02-.043-.018-.044-.017-.043-.015-.044-.013-.044-.012-.044-.011-.045-.009-.044-.007-.045-.006-.045-.004-.045-.002-.045-.001-.045v-17l.001-.045.002-.045.004-.045.006-.045.007-.045.009-.044.011-.045.012-.044.013-.044.015-.044.017-.043.018-.044.02-.043.021-.043.023-.043.024-.043.026-.043.027-.042.029-.042.03-.042.032-.042.033-.042.034-.041.036-.041.037-.041.039-.041.04-.041.041-.04.043-.04.044-.04.046-.04.046-.039.049-.039.049-.039.051-.039.052-.038.053-.038.055-.038.056-.038.057-.037.058-.037.06-.037.061-.036.062-.036.063-.036.064-.036.066-.035.067-.035.068-.035.069-.035.07-.034.072-.034.072-.033.074-.033.151-.066.155-.064.159-.063.164-.061.167-.06.172-.059.176-.057.179-.056.184-.054.187-.053.19-.051.195-.05.198-.048.201-.046.204-.045.208-.043.211-.041.214-.04.217-.038.22-.036.223-.034.226-.032.228-.031.231-.028.234-.027.236-.024.238-.023.241-.02.243-.019.245-.016.247-.015.249-.012.251-.01.253-.008.255-.005.256-.004.258-.001.258.001zm-9.258 20.499v.01l.001.021.003.021.004.022.005.021.006.022.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.023.018.024.019.024.021.024.022.025.023.024.024.025.052.049.056.05.061.051.066.051.07.051.075.051.079.052.084.052.088.052.092.052.097.052.102.051.105.052.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.048.144.049.147.047.152.047.155.047.16.045.163.045.167.043.171.043.176.041.178.041.183.039.187.039.19.037.194.035.197.035.202.033.204.031.209.03.212.029.216.027.219.025.222.024.226.021.23.02.233.018.236.016.24.015.243.012.246.01.249.008.253.005.256.004.259.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.021.224-.024.22-.026.216-.027.212-.028.21-.031.205-.031.202-.034.198-.034.194-.036.191-.037.187-.039.183-.04.179-.04.175-.042.172-.043.168-.044.163-.045.16-.046.155-.046.152-.047.148-.048.143-.049.139-.049.136-.05.131-.05.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.053.083-.051.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.05.023-.024.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.023.01-.022.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.127l-.077.055-.08.053-.083.054-.085.053-.087.052-.09.052-.093.051-.095.05-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.045-.118.044-.12.043-.122.042-.124.042-.126.041-.128.04-.13.04-.132.038-.134.038-.135.037-.138.037-.139.035-.142.035-.143.034-.144.033-.147.032-.148.031-.15.03-.151.03-.153.029-.154.027-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.01-.179.008-.179.008-.181.006-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.006-.179-.008-.179-.008-.178-.01-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.027-.153-.029-.151-.03-.15-.03-.148-.031-.146-.032-.145-.033-.143-.034-.141-.035-.14-.035-.137-.037-.136-.037-.134-.038-.132-.038-.13-.04-.128-.04-.126-.041-.124-.042-.122-.042-.12-.044-.117-.043-.116-.045-.113-.045-.112-.046-.109-.047-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.05-.093-.052-.09-.051-.087-.052-.085-.053-.083-.054-.08-.054-.077-.054v4.127zm0-5.654v.011l.001.021.003.021.004.021.005.022.006.022.007.022.009.022.01.022.011.023.012.023.013.023.015.024.016.023.017.024.018.024.019.024.021.024.022.024.023.025.024.024.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.052.11.051.114.051.119.052.123.05.127.051.131.05.135.049.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.044.171.042.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.022.23.02.233.018.236.016.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.012.241-.015.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.048.139-.05.136-.049.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.051.051-.049.023-.025.023-.024.021-.025.02-.024.019-.024.018-.024.017-.024.015-.023.014-.023.013-.024.012-.022.01-.023.01-.023.008-.022.006-.022.006-.022.004-.021.004-.022.001-.021.001-.021v-4.139l-.077.054-.08.054-.083.054-.085.052-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.049-.105.048-.106.047-.109.047-.111.046-.114.045-.115.044-.118.044-.12.044-.122.042-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.035-.143.033-.144.033-.147.033-.148.031-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.025-.161.024-.162.023-.163.022-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.011-.178.009-.179.009-.179.007-.181.007-.182.005-.182.004-.184.003-.184.002h-.37l-.184-.002-.184-.003-.182-.004-.182-.005-.181-.007-.179-.007-.179-.009-.178-.009-.176-.011-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.022-.162-.023-.161-.024-.159-.025-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.031-.146-.033-.145-.033-.143-.033-.141-.035-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.04-.126-.041-.124-.042-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.047-.105-.048-.102-.049-.1-.049-.097-.05-.095-.051-.093-.051-.09-.051-.087-.053-.085-.052-.083-.054-.08-.054-.077-.054v4.139zm0-5.666v.011l.001.02.003.022.004.021.005.022.006.021.007.022.009.023.01.022.011.023.012.023.013.023.015.023.016.024.017.024.018.023.019.024.021.025.022.024.023.024.024.025.052.05.056.05.061.05.066.051.07.051.075.052.079.051.084.052.088.052.092.052.097.052.102.052.105.051.11.052.114.051.119.051.123.051.127.05.131.05.135.05.139.049.144.048.147.048.152.047.155.046.16.045.163.045.167.043.171.043.176.042.178.04.183.04.187.038.19.037.194.036.197.034.202.033.204.032.209.03.212.028.216.027.219.025.222.024.226.021.23.02.233.018.236.017.24.014.243.012.246.01.249.008.253.006.256.003.259.001.26-.001.257-.003.254-.006.25-.008.247-.01.244-.013.241-.014.237-.016.233-.018.231-.02.226-.022.224-.024.22-.025.216-.027.212-.029.21-.03.205-.032.202-.033.198-.035.194-.036.191-.037.187-.039.183-.039.179-.041.175-.042.172-.043.168-.044.163-.045.16-.045.155-.047.152-.047.148-.048.143-.049.139-.049.136-.049.131-.051.126-.05.123-.051.118-.052.114-.051.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.052.07-.051.065-.051.06-.051.056-.05.051-.049.023-.025.023-.025.021-.024.02-.024.019-.024.018-.024.017-.024.015-.023.014-.024.013-.023.012-.023.01-.022.01-.023.008-.022.006-.022.006-.022.004-.022.004-.021.001-.021.001-.021v-4.153l-.077.054-.08.054-.083.053-.085.053-.087.053-.09.051-.093.051-.095.051-.097.05-.1.049-.102.048-.105.048-.106.048-.109.046-.111.046-.114.046-.115.044-.118.044-.12.043-.122.043-.124.042-.126.041-.128.04-.13.039-.132.039-.134.038-.135.037-.138.036-.139.036-.142.034-.143.034-.144.033-.147.032-.148.032-.15.03-.151.03-.153.028-.154.028-.156.027-.158.026-.159.024-.161.024-.162.023-.163.023-.165.021-.166.02-.167.019-.169.018-.169.017-.171.016-.173.015-.173.014-.175.013-.175.012-.177.01-.178.01-.179.009-.179.007-.181.006-.182.006-.182.004-.184.003-.184.001-.185.001-.185-.001-.184-.001-.184-.003-.182-.004-.182-.006-.181-.006-.179-.007-.179-.009-.178-.01-.176-.01-.176-.012-.175-.013-.173-.014-.172-.015-.171-.016-.17-.017-.169-.018-.167-.019-.166-.02-.165-.021-.163-.023-.162-.023-.161-.024-.159-.024-.157-.026-.156-.027-.155-.028-.153-.028-.151-.03-.15-.03-.148-.032-.146-.032-.145-.033-.143-.034-.141-.034-.14-.036-.137-.036-.136-.037-.134-.038-.132-.039-.13-.039-.128-.041-.126-.041-.124-.041-.122-.043-.12-.043-.117-.044-.116-.044-.113-.046-.112-.046-.109-.046-.106-.048-.105-.048-.102-.048-.1-.05-.097-.049-.095-.051-.093-.051-.09-.052-.087-.052-.085-.053-.083-.053-.08-.054-.077-.054v4.153zm8.74-8.179l-.257.004-.254.005-.25.008-.247.011-.244.012-.241.014-.237.016-.233.018-.231.021-.226.022-.224.023-.22.026-.216.027-.212.028-.21.031-.205.032-.202.033-.198.034-.194.036-.191.038-.187.038-.183.04-.179.041-.175.042-.172.043-.168.043-.163.045-.16.046-.155.046-.152.048-.148.048-.143.048-.139.049-.136.05-.131.05-.126.051-.123.051-.118.051-.114.052-.11.052-.106.052-.101.052-.096.052-.092.052-.088.052-.083.052-.079.052-.074.051-.07.052-.065.051-.06.05-.056.05-.051.05-.023.025-.023.024-.021.024-.02.025-.019.024-.018.024-.017.023-.015.024-.014.023-.013.023-.012.023-.01.023-.01.022-.008.022-.006.023-.006.021-.004.022-.004.021-.001.021-.001.021.001.021.001.021.004.021.004.022.006.021.006.023.008.022.01.022.01.023.012.023.013.023.014.023.015.024.017.023.018.024.019.024.02.025.021.024.023.024.023.025.051.05.056.05.06.05.065.051.07.052.074.051.079.052.083.052.088.052.092.052.096.052.101.052.106.052.11.052.114.052.118.051.123.051.126.051.131.05.136.05.139.049.143.048.148.048.152.048.155.046.16.046.163.045.168.043.172.043.175.042.179.041.183.04.187.038.191.038.194.036.198.034.202.033.205.032.21.031.212.028.216.027.22.026.224.023.226.022.231.021.233.018.237.016.241.014.244.012.247.011.25.008.254.005.257.004.26.001.26-.001.257-.004.254-.005.25-.008.247-.011.244-.012.241-.014.237-.016.233-.018.231-.021.226-.022.224-.023.22-.026.216-.027.212-.028.21-.031.205-.032.202-.033.198-.034.194-.036.191-.038.187-.038.183-.04.179-.041.175-.042.172-.043.168-.043.163-.045.16-.046.155-.046.152-.048.148-.048.143-.048.139-.049.136-.05.131-.05.126-.051.123-.051.118-.051.114-.052.11-.052.106-.052.101-.052.096-.052.092-.052.088-.052.083-.052.079-.052.074-.051.07-.052.065-.051.06-.05.056-.05.051-.05.023-.025.023-.024.021-.024.02-.025.019-.024.018-.024.017-.023.015-.024.014-.023.013-.023.012-.023.01-.023.01-.022.008-.022.006-.023.006-.021.004-.022.004-.021.001-.021.001-.021-.001-.021-.001-.021-.004-.021-.004-.022-.006-.021-.006-.023-.008-.022-.01-.022-.01-.023-.012-.023-.013-.023-.014-.023-.015-.024-.017-.023-.018-.024-.019-.024-.02-.025-.021-.024-.023-.024-.023-.025-.051-.05-.056-.05-.06-.05-.065-.051-.07-.052-.074-.051-.079-.052-.083-.052-.088-.052-.092-.052-.096-.052-.101-.052-.106-.052-.11-.052-.114-.052-.118-.051-.123-.051-.126-.051-.131-.05-.136-.05-.139-.049-.143-.048-.148-.048-.152-.048-.155-.046-.16-.046-.163-.045-.168-.043-.172-.043-.175-.042-.179-.041-.183-.04-.187-.038-.191-.038-.194-.036-.198-.034-.202-.033-.205-.032-.21-.031-.212-.028-.216-.027-.22-.026-.224-.023-.226-.022-.231-.021-.233-.018-.237-.016-.241-.014-.244-.012-.247-.011-.25-.008-.254-.005-.257-.004-.26-.001-.26.001z"
  );
};
const insertComputerIcon = function(elem) {
  elem.append("defs").append("symbol").attr("id", "computer").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr(
    "d",
    "M2 2v13h20v-13h-20zm18 11h-16v-9h16v9zm-10.228 6l.466-1h3.524l.467 1h-4.457zm14.228 3h-24l2-6h2.104l-1.33 4h18.45l-1.297-4h2.073l2 6zm-5-10h-14v-7h14v7z"
  );
};
const insertClockIcon = function(elem) {
  elem.append("defs").append("symbol").attr("id", "clock").attr("width", "24").attr("height", "24").append("path").attr("transform", "scale(.5)").attr(
    "d",
    "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"
  );
};
const insertArrowHead = function(elem) {
  elem.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 9).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z");
};
const insertArrowFilledHead = function(elem) {
  elem.append("defs").append("marker").attr("id", "filled-head").attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
};
const insertSequenceNumber = function(elem) {
  elem.append("defs").append("marker").attr("id", "sequencenumber").attr("refX", 15).attr("refY", 15).attr("markerWidth", 60).attr("markerHeight", 40).attr("orient", "auto").append("circle").attr("cx", 15).attr("cy", 15).attr("r", 6);
};
const insertArrowCrossHead = function(elem) {
  const defs = elem.append("defs");
  const marker = defs.append("marker").attr("id", "crosshead").attr("markerWidth", 15).attr("markerHeight", 8).attr("orient", "auto").attr("refX", 4).attr("refY", 5);
  marker.append("path").attr("fill", "none").attr("stroke", "#000000").style("stroke-dasharray", "0, 0").attr("stroke-width", "1pt").attr("d", "M 1,2 L 6,7 M 6,2 L 1,7");
};
const getTextObj = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: void 0,
    style: "#666",
    width: void 0,
    height: void 0,
    textMargin: 0,
    rx: 0,
    ry: 0,
    tspan: true,
    valign: void 0
  };
};
const getNoteRect = function() {
  return {
    x: 0,
    y: 0,
    fill: "#EDF2AE",
    stroke: "#666",
    width: 100,
    anchor: "start",
    height: 100,
    rx: 0,
    ry: 0
  };
};
const _drawTextCandidateFunc = function() {
  function byText(content, g, x, y, width, height, textAttrs) {
    const text = g.append("text").attr("x", x + width / 2).attr("y", y + height / 2 + 5).style("text-anchor", "middle").text(content);
    _setTextAttrs(text, textAttrs);
  }
  function byTspan(content, g, x, y, width, height, textAttrs, conf2) {
    const { actorFontSize, actorFontFamily, actorFontWeight } = conf2;
    const [_actorFontSize, _actorFontSizePx] = parseFontSize(actorFontSize);
    const lines = content.split(common.lineBreakRegex);
    for (let i = 0; i < lines.length; i++) {
      const dy = i * _actorFontSize - _actorFontSize * (lines.length - 1) / 2;
      const text = g.append("text").attr("x", x + width / 2).attr("y", y).style("text-anchor", "middle").style("font-size", _actorFontSizePx).style("font-weight", actorFontWeight).style("font-family", actorFontFamily);
      text.append("tspan").attr("x", x + width / 2).attr("dy", dy).text(lines[i]);
      text.attr("y", y + height / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central");
      _setTextAttrs(text, textAttrs);
    }
  }
  function byFo(content, g, x, y, width, height, textAttrs, conf2) {
    const s = g.append("switch");
    const f = s.append("foreignObject").attr("x", x).attr("y", y).attr("width", width).attr("height", height);
    const text = f.append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    text.append("div").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(content);
    byTspan(content, s, x, y, width, height, textAttrs, conf2);
    _setTextAttrs(text, textAttrs);
  }
  function _setTextAttrs(toText, fromTextAttrsDict) {
    for (const key in fromTextAttrsDict) {
      if (fromTextAttrsDict.hasOwnProperty(key)) {
        toText.attr(key, fromTextAttrsDict[key]);
      }
    }
  }
  return function(conf2) {
    return conf2.textPlacement === "fo" ? byFo : conf2.textPlacement === "old" ? byText : byTspan;
  };
}();
const _drawMenuItemTextCandidateFunc = function() {
  function byText(content, g, x, y, width, height, textAttrs) {
    const text = g.append("text").attr("x", x).attr("y", y).style("text-anchor", "start").text(content);
    _setTextAttrs(text, textAttrs);
  }
  function byTspan(content, g, x, y, width, height, textAttrs, conf2) {
    const { actorFontSize, actorFontFamily, actorFontWeight } = conf2;
    const lines = content.split(common.lineBreakRegex);
    for (let i = 0; i < lines.length; i++) {
      const dy = i * actorFontSize - actorFontSize * (lines.length - 1) / 2;
      const text = g.append("text").attr("x", x).attr("y", y).style("text-anchor", "start").style("font-size", actorFontSize).style("font-weight", actorFontWeight).style("font-family", actorFontFamily);
      text.append("tspan").attr("x", x).attr("dy", dy).text(lines[i]);
      text.attr("y", y + height / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central");
      _setTextAttrs(text, textAttrs);
    }
  }
  function byFo(content, g, x, y, width, height, textAttrs, conf2) {
    const s = g.append("switch");
    const f = s.append("foreignObject").attr("x", x).attr("y", y).attr("width", width).attr("height", height);
    const text = f.append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    text.append("div").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(content);
    byTspan(content, s, x, y, width, height, textAttrs, conf2);
    _setTextAttrs(text, textAttrs);
  }
  function _setTextAttrs(toText, fromTextAttrsDict) {
    for (const key in fromTextAttrsDict) {
      if (fromTextAttrsDict.hasOwnProperty(key)) {
        toText.attr(key, fromTextAttrsDict[key]);
      }
    }
  }
  return function(conf2) {
    return conf2.textPlacement === "fo" ? byFo : conf2.textPlacement === "old" ? byText : byTspan;
  };
}();
const svgDraw = {
  drawRect,
  drawText,
  drawLabel,
  drawActor,
  drawBox,
  drawPopup,
  anchorElement,
  drawActivation,
  drawLoop,
  drawBackgroundRect,
  insertArrowHead,
  insertArrowFilledHead,
  insertSequenceNumber,
  insertArrowCrossHead,
  insertDatabaseIcon,
  insertComputerIcon,
  insertClockIcon,
  getTextObj,
  getNoteRect,
  popupMenu,
  popdownMenu,
  fixLifeLineHeights,
  sanitizeUrl: sanitizeUrl_1
};
let conf = {};
const bounds = {
  data: {
    startx: void 0,
    stopx: void 0,
    starty: void 0,
    stopy: void 0
  },
  verticalPos: 0,
  sequenceItems: [],
  activations: [],
  models: {
    getHeight: function() {
      return Math.max.apply(
        null,
        this.actors.length === 0 ? [0] : this.actors.map((actor) => actor.height || 0)
      ) + (this.loops.length === 0 ? 0 : this.loops.map((it) => it.height || 0).reduce((acc, h) => acc + h)) + (this.messages.length === 0 ? 0 : this.messages.map((it) => it.height || 0).reduce((acc, h) => acc + h)) + (this.notes.length === 0 ? 0 : this.notes.map((it) => it.height || 0).reduce((acc, h) => acc + h));
    },
    clear: function() {
      this.actors = [];
      this.boxes = [];
      this.loops = [];
      this.messages = [];
      this.notes = [];
    },
    addBox: function(boxModel) {
      this.boxes.push(boxModel);
    },
    addActor: function(actorModel) {
      this.actors.push(actorModel);
    },
    addLoop: function(loopModel) {
      this.loops.push(loopModel);
    },
    addMessage: function(msgModel) {
      this.messages.push(msgModel);
    },
    addNote: function(noteModel) {
      this.notes.push(noteModel);
    },
    lastActor: function() {
      return this.actors[this.actors.length - 1];
    },
    lastLoop: function() {
      return this.loops[this.loops.length - 1];
    },
    lastMessage: function() {
      return this.messages[this.messages.length - 1];
    },
    lastNote: function() {
      return this.notes[this.notes.length - 1];
    },
    actors: [],
    boxes: [],
    loops: [],
    messages: [],
    notes: []
  },
  init: function() {
    this.sequenceItems = [];
    this.activations = [];
    this.models.clear();
    this.data = {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0
    };
    this.verticalPos = 0;
    setConf(getConfig());
  },
  updateVal: function(obj, key, val, fun) {
    if (obj[key] === void 0) {
      obj[key] = val;
    } else {
      obj[key] = fun(val, obj[key]);
    }
  },
  updateBounds: function(startx, starty, stopx, stopy) {
    const _self = this;
    let cnt = 0;
    function updateFn(type) {
      return function updateItemBounds(item) {
        cnt++;
        const n = _self.sequenceItems.length - cnt + 1;
        _self.updateVal(item, "starty", starty - n * conf.boxMargin, Math.min);
        _self.updateVal(item, "stopy", stopy + n * conf.boxMargin, Math.max);
        _self.updateVal(bounds.data, "startx", startx - n * conf.boxMargin, Math.min);
        _self.updateVal(bounds.data, "stopx", stopx + n * conf.boxMargin, Math.max);
        if (!(type === "activation")) {
          _self.updateVal(item, "startx", startx - n * conf.boxMargin, Math.min);
          _self.updateVal(item, "stopx", stopx + n * conf.boxMargin, Math.max);
          _self.updateVal(bounds.data, "starty", starty - n * conf.boxMargin, Math.min);
          _self.updateVal(bounds.data, "stopy", stopy + n * conf.boxMargin, Math.max);
        }
      };
    }
    this.sequenceItems.forEach(updateFn());
    this.activations.forEach(updateFn("activation"));
  },
  insert: function(startx, starty, stopx, stopy) {
    const _startx = common.getMin(startx, stopx);
    const _stopx = common.getMax(startx, stopx);
    const _starty = common.getMin(starty, stopy);
    const _stopy = common.getMax(starty, stopy);
    this.updateVal(bounds.data, "startx", _startx, Math.min);
    this.updateVal(bounds.data, "starty", _starty, Math.min);
    this.updateVal(bounds.data, "stopx", _stopx, Math.max);
    this.updateVal(bounds.data, "stopy", _stopy, Math.max);
    this.updateBounds(_startx, _starty, _stopx, _stopy);
  },
  newActivation: function(message, diagram2, actors2) {
    const actorRect = actors2[message.from.actor];
    const stackedSize = actorActivations(message.from.actor).length || 0;
    const x = actorRect.x + actorRect.width / 2 + (stackedSize - 1) * conf.activationWidth / 2;
    this.activations.push({
      startx: x,
      starty: this.verticalPos + 2,
      stopx: x + conf.activationWidth,
      stopy: void 0,
      actor: message.from.actor,
      anchored: svgDraw.anchorElement(diagram2)
    });
  },
  endActivation: function(message) {
    const lastActorActivationIdx = this.activations.map(function(activation) {
      return activation.actor;
    }).lastIndexOf(message.from.actor);
    return this.activations.splice(lastActorActivationIdx, 1)[0];
  },
  createLoop: function(title = { message: void 0, wrap: false, width: void 0 }, fill) {
    return {
      startx: void 0,
      starty: this.verticalPos,
      stopx: void 0,
      stopy: void 0,
      title: title.message,
      wrap: title.wrap,
      width: title.width,
      height: 0,
      fill
    };
  },
  newLoop: function(title = { message: void 0, wrap: false, width: void 0 }, fill) {
    this.sequenceItems.push(this.createLoop(title, fill));
  },
  endLoop: function() {
    return this.sequenceItems.pop();
  },
  isLoopOverlap: function() {
    return this.sequenceItems.length ? this.sequenceItems[this.sequenceItems.length - 1].overlap : false;
  },
  addSectionToLoop: function(message) {
    const loop = this.sequenceItems.pop();
    loop.sections = loop.sections || [];
    loop.sectionTitles = loop.sectionTitles || [];
    loop.sections.push({ y: bounds.getVerticalPos(), height: 0 });
    loop.sectionTitles.push(message);
    this.sequenceItems.push(loop);
  },
  saveVerticalPos: function() {
    if (this.isLoopOverlap()) {
      this.savedVerticalPos = this.verticalPos;
    }
  },
  resetVerticalPos: function() {
    if (this.isLoopOverlap()) {
      this.verticalPos = this.savedVerticalPos;
    }
  },
  bumpVerticalPos: function(bump) {
    this.verticalPos = this.verticalPos + bump;
    this.data.stopy = common.getMax(this.data.stopy, this.verticalPos);
  },
  getVerticalPos: function() {
    return this.verticalPos;
  },
  getBounds: function() {
    return { bounds: this.data, models: this.models };
  }
};
const drawNote = function(elem, noteModel) {
  bounds.bumpVerticalPos(conf.boxMargin);
  noteModel.height = conf.boxMargin;
  noteModel.starty = bounds.getVerticalPos();
  const rect = getNoteRect$1();
  rect.x = noteModel.startx;
  rect.y = noteModel.starty;
  rect.width = noteModel.width || conf.width;
  rect.class = "note";
  const g = elem.append("g");
  const rectElem = svgDraw.drawRect(g, rect);
  const textObj = getTextObj$1();
  textObj.x = noteModel.startx;
  textObj.y = noteModel.starty;
  textObj.width = rect.width;
  textObj.dy = "1em";
  textObj.text = noteModel.message;
  textObj.class = "noteText";
  textObj.fontFamily = conf.noteFontFamily;
  textObj.fontSize = conf.noteFontSize;
  textObj.fontWeight = conf.noteFontWeight;
  textObj.anchor = conf.noteAlign;
  textObj.textMargin = conf.noteMargin;
  textObj.valign = "center";
  const textElem = drawText(g, textObj);
  const textHeight = Math.round(
    textElem.map((te) => (te._groups || te)[0][0].getBBox().height).reduce((acc, curr) => acc + curr)
  );
  rectElem.attr("height", textHeight + 2 * conf.noteMargin);
  noteModel.height += textHeight + 2 * conf.noteMargin;
  bounds.bumpVerticalPos(textHeight + 2 * conf.noteMargin);
  noteModel.stopy = noteModel.starty + textHeight + 2 * conf.noteMargin;
  noteModel.stopx = noteModel.startx + rect.width;
  bounds.insert(noteModel.startx, noteModel.starty, noteModel.stopx, noteModel.stopy);
  bounds.models.addNote(noteModel);
};
const messageFont = (cnf) => {
  return {
    fontFamily: cnf.messageFontFamily,
    fontSize: cnf.messageFontSize,
    fontWeight: cnf.messageFontWeight
  };
};
const noteFont = (cnf) => {
  return {
    fontFamily: cnf.noteFontFamily,
    fontSize: cnf.noteFontSize,
    fontWeight: cnf.noteFontWeight
  };
};
const actorFont = (cnf) => {
  return {
    fontFamily: cnf.actorFontFamily,
    fontSize: cnf.actorFontSize,
    fontWeight: cnf.actorFontWeight
  };
};
function boundMessage(_diagram, msgModel) {
  bounds.bumpVerticalPos(10);
  const { startx, stopx, message } = msgModel;
  const lines = common.splitBreaks(message).length;
  const textDims = utils.calculateTextDimensions(message, messageFont(conf));
  const lineHeight = textDims.height / lines;
  msgModel.height += lineHeight;
  bounds.bumpVerticalPos(lineHeight);
  let lineStartY;
  let totalOffset = textDims.height - 10;
  const textWidth = textDims.width;
  if (startx === stopx) {
    lineStartY = bounds.getVerticalPos() + totalOffset;
    if (!conf.rightAngles) {
      totalOffset += conf.boxMargin;
      lineStartY = bounds.getVerticalPos() + totalOffset;
    }
    totalOffset += 30;
    const dx = common.getMax(textWidth / 2, conf.width / 2);
    bounds.insert(
      startx - dx,
      bounds.getVerticalPos() - 10 + totalOffset,
      stopx + dx,
      bounds.getVerticalPos() + 30 + totalOffset
    );
  } else {
    totalOffset += conf.boxMargin;
    lineStartY = bounds.getVerticalPos() + totalOffset;
    bounds.insert(startx, lineStartY - 10, stopx, lineStartY);
  }
  bounds.bumpVerticalPos(totalOffset);
  msgModel.height += totalOffset;
  msgModel.stopy = msgModel.starty + msgModel.height;
  bounds.insert(msgModel.fromBounds, msgModel.starty, msgModel.toBounds, msgModel.stopy);
  return lineStartY;
}
const drawMessage = function(diagram2, msgModel, lineStartY, diagObj) {
  const { startx, stopx, starty, message, type, sequenceIndex, sequenceVisible } = msgModel;
  const textDims = utils.calculateTextDimensions(message, messageFont(conf));
  const textObj = getTextObj$1();
  textObj.x = startx;
  textObj.y = starty + 10;
  textObj.width = stopx - startx;
  textObj.class = "messageText";
  textObj.dy = "1em";
  textObj.text = message;
  textObj.fontFamily = conf.messageFontFamily;
  textObj.fontSize = conf.messageFontSize;
  textObj.fontWeight = conf.messageFontWeight;
  textObj.anchor = conf.messageAlign;
  textObj.valign = "center";
  textObj.textMargin = conf.wrapPadding;
  textObj.tspan = false;
  drawText(diagram2, textObj);
  const textWidth = textDims.width;
  let line;
  if (startx === stopx) {
    if (conf.rightAngles) {
      line = diagram2.append("path").attr(
        "d",
        `M  ${startx},${lineStartY} H ${startx + common.getMax(conf.width / 2, textWidth / 2)} V ${lineStartY + 25} H ${startx}`
      );
    } else {
      line = diagram2.append("path").attr(
        "d",
        "M " + startx + "," + lineStartY + " C " + (startx + 60) + "," + (lineStartY - 10) + " " + (startx + 60) + "," + (lineStartY + 30) + " " + startx + "," + (lineStartY + 20)
      );
    }
  } else {
    line = diagram2.append("line");
    line.attr("x1", startx);
    line.attr("y1", lineStartY);
    line.attr("x2", stopx);
    line.attr("y2", lineStartY);
  }
  if (type === diagObj.db.LINETYPE.DOTTED || type === diagObj.db.LINETYPE.DOTTED_CROSS || type === diagObj.db.LINETYPE.DOTTED_POINT || type === diagObj.db.LINETYPE.DOTTED_OPEN) {
    line.style("stroke-dasharray", "3, 3");
    line.attr("class", "messageLine1");
  } else {
    line.attr("class", "messageLine0");
  }
  let url = "";
  if (conf.arrowMarkerAbsolute) {
    url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
    url = url.replace(/\(/g, "\\(");
    url = url.replace(/\)/g, "\\)");
  }
  line.attr("stroke-width", 2);
  line.attr("stroke", "none");
  line.style("fill", "none");
  if (type === diagObj.db.LINETYPE.SOLID || type === diagObj.db.LINETYPE.DOTTED) {
    line.attr("marker-end", "url(" + url + "#arrowhead)");
  }
  if (type === diagObj.db.LINETYPE.SOLID_POINT || type === diagObj.db.LINETYPE.DOTTED_POINT) {
    line.attr("marker-end", "url(" + url + "#filled-head)");
  }
  if (type === diagObj.db.LINETYPE.SOLID_CROSS || type === diagObj.db.LINETYPE.DOTTED_CROSS) {
    line.attr("marker-end", "url(" + url + "#crosshead)");
  }
  if (sequenceVisible || conf.showSequenceNumbers) {
    line.attr("marker-start", "url(" + url + "#sequencenumber)");
    diagram2.append("text").attr("x", startx).attr("y", lineStartY + 4).attr("font-family", "sans-serif").attr("font-size", "12px").attr("text-anchor", "middle").attr("class", "sequenceNumber").text(sequenceIndex);
  }
};
const drawActors = function(diagram2, actors2, actorKeys, verticalPos, configuration, messages2, isFooter) {
  if (configuration.hideUnusedParticipants === true) {
    const newActors = /* @__PURE__ */ new Set();
    messages2.forEach((message) => {
      newActors.add(message.from);
      newActors.add(message.to);
    });
    actorKeys = actorKeys.filter((actorKey) => newActors.has(actorKey));
  }
  let prevWidth = 0;
  let prevMargin = 0;
  let maxHeight = 0;
  let prevBox = void 0;
  for (const actorKey of actorKeys) {
    const actor = actors2[actorKey];
    const box = actor.box;
    if (prevBox && prevBox != box) {
      if (!isFooter) {
        bounds.models.addBox(prevBox);
      }
      prevMargin += conf.boxMargin + prevBox.margin;
    }
    if (box && box != prevBox) {
      if (!isFooter) {
        box.x = prevWidth + prevMargin;
        box.y = verticalPos;
      }
      prevMargin += box.margin;
    }
    actor.width = actor.width || conf.width;
    actor.height = common.getMax(actor.height || conf.height, conf.height);
    actor.margin = actor.margin || conf.actorMargin;
    actor.x = prevWidth + prevMargin;
    actor.y = bounds.getVerticalPos();
    const height = svgDraw.drawActor(diagram2, actor, conf, isFooter);
    maxHeight = common.getMax(maxHeight, height);
    bounds.insert(actor.x, verticalPos, actor.x + actor.width, actor.height);
    prevWidth += actor.width + prevMargin;
    if (actor.box) {
      actor.box.width = prevWidth + box.margin - actor.box.x;
    }
    prevMargin = actor.margin;
    prevBox = actor.box;
    bounds.models.addActor(actor);
  }
  if (prevBox && !isFooter) {
    bounds.models.addBox(prevBox);
  }
  bounds.bumpVerticalPos(maxHeight);
};
const drawActorsPopup = function(diagram2, actors2, actorKeys, doc) {
  let maxHeight = 0;
  let maxWidth = 0;
  for (const actorKey of actorKeys) {
    const actor = actors2[actorKey];
    const minMenuWidth = getRequiredPopupWidth(actor);
    const menuDimensions = svgDraw.drawPopup(
      diagram2,
      actor,
      minMenuWidth,
      conf,
      conf.forceMenus,
      doc
    );
    if (menuDimensions.height > maxHeight) {
      maxHeight = menuDimensions.height;
    }
    if (menuDimensions.width + actor.x > maxWidth) {
      maxWidth = menuDimensions.width + actor.x;
    }
  }
  return { maxHeight, maxWidth };
};
const setConf = function(cnf) {
  assignWithDepth(conf, cnf);
  if (cnf.fontFamily) {
    conf.actorFontFamily = conf.noteFontFamily = conf.messageFontFamily = cnf.fontFamily;
  }
  if (cnf.fontSize) {
    conf.actorFontSize = conf.noteFontSize = conf.messageFontSize = cnf.fontSize;
  }
  if (cnf.fontWeight) {
    conf.actorFontWeight = conf.noteFontWeight = conf.messageFontWeight = cnf.fontWeight;
  }
};
const actorActivations = function(actor) {
  return bounds.activations.filter(function(activation) {
    return activation.actor === actor;
  });
};
const activationBounds = function(actor, actors2) {
  const actorObj = actors2[actor];
  const activations = actorActivations(actor);
  const left = activations.reduce(function(acc, activation) {
    return common.getMin(acc, activation.startx);
  }, actorObj.x + actorObj.width / 2);
  const right = activations.reduce(function(acc, activation) {
    return common.getMax(acc, activation.stopx);
  }, actorObj.x + actorObj.width / 2);
  return [left, right];
};
function adjustLoopHeightForWrap(loopWidths, msg, preMargin, postMargin, addLoopFn) {
  bounds.bumpVerticalPos(preMargin);
  let heightAdjust = postMargin;
  if (msg.id && msg.message && loopWidths[msg.id]) {
    const loopWidth = loopWidths[msg.id].width;
    const textConf = messageFont(conf);
    msg.message = utils.wrapLabel(`[${msg.message}]`, loopWidth - 2 * conf.wrapPadding, textConf);
    msg.width = loopWidth;
    msg.wrap = true;
    const textDims = utils.calculateTextDimensions(msg.message, textConf);
    const totalOffset = common.getMax(textDims.height, conf.labelBoxHeight);
    heightAdjust = postMargin + totalOffset;
    log.debug(`${totalOffset} - ${msg.message}`);
  }
  addLoopFn(msg);
  bounds.bumpVerticalPos(heightAdjust);
}
const draw = function(_text, id, _version, diagObj) {
  const { securityLevel, sequence } = getConfig();
  conf = sequence;
  diagObj.db.clear();
  diagObj.parser.parse(_text);
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = select("#i" + id);
  }
  const root = securityLevel === "sandbox" ? select(sandboxElement.nodes()[0].contentDocument.body) : select("body");
  const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
  bounds.init();
  log.debug(diagObj.db);
  const diagram2 = securityLevel === "sandbox" ? root.select(`[id="${id}"]`) : select(`[id="${id}"]`);
  const actors2 = diagObj.db.getActors();
  const boxes2 = diagObj.db.getBoxes();
  const actorKeys = diagObj.db.getActorKeys();
  const messages2 = diagObj.db.getMessages();
  const title = diagObj.db.getDiagramTitle();
  const hasBoxes = diagObj.db.hasAtLeastOneBox();
  const hasBoxTitles = diagObj.db.hasAtLeastOneBoxWithTitle();
  const maxMessageWidthPerActor = getMaxMessageWidthPerActor(actors2, messages2, diagObj);
  conf.height = calculateActorMargins(actors2, maxMessageWidthPerActor, boxes2);
  svgDraw.insertComputerIcon(diagram2);
  svgDraw.insertDatabaseIcon(diagram2);
  svgDraw.insertClockIcon(diagram2);
  if (hasBoxes) {
    bounds.bumpVerticalPos(conf.boxMargin);
    if (hasBoxTitles) {
      bounds.bumpVerticalPos(boxes2[0].textMaxHeight);
    }
  }
  drawActors(diagram2, actors2, actorKeys, 0, conf, messages2, false);
  const loopWidths = calculateLoopBounds(messages2, actors2, maxMessageWidthPerActor, diagObj);
  svgDraw.insertArrowHead(diagram2);
  svgDraw.insertArrowCrossHead(diagram2);
  svgDraw.insertArrowFilledHead(diagram2);
  svgDraw.insertSequenceNumber(diagram2);
  function activeEnd(msg, verticalPos) {
    const activationData = bounds.endActivation(msg);
    if (activationData.starty + 18 > verticalPos) {
      activationData.starty = verticalPos - 6;
      verticalPos += 12;
    }
    svgDraw.drawActivation(
      diagram2,
      activationData,
      verticalPos,
      conf,
      actorActivations(msg.from.actor).length
    );
    bounds.insert(activationData.startx, verticalPos - 10, activationData.stopx, verticalPos);
  }
  let sequenceIndex = 1;
  let sequenceIndexStep = 1;
  const messagesToDraw = [];
  messages2.forEach(function(msg) {
    let loopModel, noteModel, msgModel;
    switch (msg.type) {
      case diagObj.db.LINETYPE.NOTE:
        bounds.resetVerticalPos();
        noteModel = msg.noteModel;
        drawNote(diagram2, noteModel);
        break;
      case diagObj.db.LINETYPE.ACTIVE_START:
        bounds.newActivation(msg, diagram2, actors2);
        break;
      case diagObj.db.LINETYPE.ACTIVE_END:
        activeEnd(msg, bounds.getVerticalPos());
        break;
      case diagObj.db.LINETYPE.LOOP_START:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin,
          conf.boxMargin + conf.boxTextMargin,
          (message) => bounds.newLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.LOOP_END:
        loopModel = bounds.endLoop();
        svgDraw.drawLoop(diagram2, loopModel, "loop", conf);
        bounds.bumpVerticalPos(loopModel.stopy - bounds.getVerticalPos());
        bounds.models.addLoop(loopModel);
        break;
      case diagObj.db.LINETYPE.RECT_START:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin,
          conf.boxMargin,
          (message) => bounds.newLoop(void 0, message.message)
        );
        break;
      case diagObj.db.LINETYPE.RECT_END:
        loopModel = bounds.endLoop();
        svgDraw.drawBackgroundRect(diagram2, loopModel);
        bounds.models.addLoop(loopModel);
        bounds.bumpVerticalPos(loopModel.stopy - bounds.getVerticalPos());
        break;
      case diagObj.db.LINETYPE.OPT_START:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin,
          conf.boxMargin + conf.boxTextMargin,
          (message) => bounds.newLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.OPT_END:
        loopModel = bounds.endLoop();
        svgDraw.drawLoop(diagram2, loopModel, "opt", conf);
        bounds.bumpVerticalPos(loopModel.stopy - bounds.getVerticalPos());
        bounds.models.addLoop(loopModel);
        break;
      case diagObj.db.LINETYPE.ALT_START:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin,
          conf.boxMargin + conf.boxTextMargin,
          (message) => bounds.newLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.ALT_ELSE:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin + conf.boxTextMargin,
          conf.boxMargin,
          (message) => bounds.addSectionToLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.ALT_END:
        loopModel = bounds.endLoop();
        svgDraw.drawLoop(diagram2, loopModel, "alt", conf);
        bounds.bumpVerticalPos(loopModel.stopy - bounds.getVerticalPos());
        bounds.models.addLoop(loopModel);
        break;
      case diagObj.db.LINETYPE.PAR_START:
      case diagObj.db.LINETYPE.PAR_OVER_START:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin,
          conf.boxMargin + conf.boxTextMargin,
          (message) => bounds.newLoop(message)
        );
        bounds.saveVerticalPos();
        break;
      case diagObj.db.LINETYPE.PAR_AND:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin + conf.boxTextMargin,
          conf.boxMargin,
          (message) => bounds.addSectionToLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.PAR_END:
        loopModel = bounds.endLoop();
        svgDraw.drawLoop(diagram2, loopModel, "par", conf);
        bounds.bumpVerticalPos(loopModel.stopy - bounds.getVerticalPos());
        bounds.models.addLoop(loopModel);
        break;
      case diagObj.db.LINETYPE.AUTONUMBER:
        sequenceIndex = msg.message.start || sequenceIndex;
        sequenceIndexStep = msg.message.step || sequenceIndexStep;
        if (msg.message.visible) {
          diagObj.db.enableSequenceNumbers();
        } else {
          diagObj.db.disableSequenceNumbers();
        }
        break;
      case diagObj.db.LINETYPE.CRITICAL_START:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin,
          conf.boxMargin + conf.boxTextMargin,
          (message) => bounds.newLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.CRITICAL_OPTION:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin + conf.boxTextMargin,
          conf.boxMargin,
          (message) => bounds.addSectionToLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.CRITICAL_END:
        loopModel = bounds.endLoop();
        svgDraw.drawLoop(diagram2, loopModel, "critical", conf);
        bounds.bumpVerticalPos(loopModel.stopy - bounds.getVerticalPos());
        bounds.models.addLoop(loopModel);
        break;
      case diagObj.db.LINETYPE.BREAK_START:
        adjustLoopHeightForWrap(
          loopWidths,
          msg,
          conf.boxMargin,
          conf.boxMargin + conf.boxTextMargin,
          (message) => bounds.newLoop(message)
        );
        break;
      case diagObj.db.LINETYPE.BREAK_END:
        loopModel = bounds.endLoop();
        svgDraw.drawLoop(diagram2, loopModel, "break", conf);
        bounds.bumpVerticalPos(loopModel.stopy - bounds.getVerticalPos());
        bounds.models.addLoop(loopModel);
        break;
      default:
        try {
          bounds.resetVerticalPos();
          msgModel = msg.msgModel;
          msgModel.starty = bounds.getVerticalPos();
          msgModel.sequenceIndex = sequenceIndex;
          msgModel.sequenceVisible = diagObj.db.showSequenceNumbers();
          const lineStartY = boundMessage(diagram2, msgModel);
          messagesToDraw.push({ messageModel: msgModel, lineStartY });
          bounds.models.addMessage(msgModel);
        } catch (e) {
          log.error("error while drawing message", e);
        }
    }
    if ([
      diagObj.db.LINETYPE.SOLID_OPEN,
      diagObj.db.LINETYPE.DOTTED_OPEN,
      diagObj.db.LINETYPE.SOLID,
      diagObj.db.LINETYPE.DOTTED,
      diagObj.db.LINETYPE.SOLID_CROSS,
      diagObj.db.LINETYPE.DOTTED_CROSS,
      diagObj.db.LINETYPE.SOLID_POINT,
      diagObj.db.LINETYPE.DOTTED_POINT
    ].includes(msg.type)) {
      sequenceIndex = sequenceIndex + sequenceIndexStep;
    }
  });
  messagesToDraw.forEach((e) => drawMessage(diagram2, e.messageModel, e.lineStartY, diagObj));
  if (conf.mirrorActors) {
    bounds.bumpVerticalPos(conf.boxMargin * 2);
    drawActors(diagram2, actors2, actorKeys, bounds.getVerticalPos(), conf, messages2, true);
    bounds.bumpVerticalPos(conf.boxMargin);
    fixLifeLineHeights(diagram2, bounds.getVerticalPos());
  }
  bounds.models.boxes.forEach(function(box2) {
    box2.height = bounds.getVerticalPos() - box2.y;
    bounds.insert(box2.x, box2.y, box2.x + box2.width, box2.height);
    box2.startx = box2.x;
    box2.starty = box2.y;
    box2.stopx = box2.startx + box2.width;
    box2.stopy = box2.starty + box2.height;
    box2.stroke = "rgb(0,0,0, 0.5)";
    svgDraw.drawBox(diagram2, box2, conf);
  });
  if (hasBoxes) {
    bounds.bumpVerticalPos(conf.boxMargin);
  }
  const requiredBoxSize = drawActorsPopup(diagram2, actors2, actorKeys, doc);
  const { bounds: box } = bounds.getBounds();
  log.debug("For line height fix Querying: #" + id + " .actor-line");
  const actorLines = selectAll("#" + id + " .actor-line");
  actorLines.attr("y2", box.stopy);
  let boxHeight = box.stopy - box.starty;
  if (boxHeight < requiredBoxSize.maxHeight) {
    boxHeight = requiredBoxSize.maxHeight;
  }
  let height = boxHeight + 2 * conf.diagramMarginY;
  if (conf.mirrorActors) {
    height = height - conf.boxMargin + conf.bottomMarginAdj;
  }
  let boxWidth = box.stopx - box.startx;
  if (boxWidth < requiredBoxSize.maxWidth) {
    boxWidth = requiredBoxSize.maxWidth;
  }
  const width = boxWidth + 2 * conf.diagramMarginX;
  if (title) {
    diagram2.append("text").text(title).attr("x", (box.stopx - box.startx) / 2 - 2 * conf.diagramMarginX).attr("y", -25);
  }
  configureSvgSize(diagram2, height, width, conf.useMaxWidth);
  const extraVertForTitle = title ? 40 : 0;
  diagram2.attr(
    "viewBox",
    box.startx - conf.diagramMarginX + " -" + (conf.diagramMarginY + extraVertForTitle) + " " + width + " " + (height + extraVertForTitle)
  );
  log.debug(`models:`, bounds.models);
};
function getMaxMessageWidthPerActor(actors2, messages2, diagObj) {
  const maxMessageWidthPerActor = {};
  messages2.forEach(function(msg) {
    if (actors2[msg.to] && actors2[msg.from]) {
      const actor = actors2[msg.to];
      if (msg.placement === diagObj.db.PLACEMENT.LEFTOF && !actor.prevActor) {
        return;
      }
      if (msg.placement === diagObj.db.PLACEMENT.RIGHTOF && !actor.nextActor) {
        return;
      }
      const isNote = msg.placement !== void 0;
      const isMessage = !isNote;
      const textFont = isNote ? noteFont(conf) : messageFont(conf);
      const wrappedMessage = msg.wrap ? utils.wrapLabel(msg.message, conf.width - 2 * conf.wrapPadding, textFont) : msg.message;
      const messageDimensions = utils.calculateTextDimensions(wrappedMessage, textFont);
      const messageWidth = messageDimensions.width + 2 * conf.wrapPadding;
      if (isMessage && msg.from === actor.nextActor) {
        maxMessageWidthPerActor[msg.to] = common.getMax(
          maxMessageWidthPerActor[msg.to] || 0,
          messageWidth
        );
      } else if (isMessage && msg.from === actor.prevActor) {
        maxMessageWidthPerActor[msg.from] = common.getMax(
          maxMessageWidthPerActor[msg.from] || 0,
          messageWidth
        );
      } else if (isMessage && msg.from === msg.to) {
        maxMessageWidthPerActor[msg.from] = common.getMax(
          maxMessageWidthPerActor[msg.from] || 0,
          messageWidth / 2
        );
        maxMessageWidthPerActor[msg.to] = common.getMax(
          maxMessageWidthPerActor[msg.to] || 0,
          messageWidth / 2
        );
      } else if (msg.placement === diagObj.db.PLACEMENT.RIGHTOF) {
        maxMessageWidthPerActor[msg.from] = common.getMax(
          maxMessageWidthPerActor[msg.from] || 0,
          messageWidth
        );
      } else if (msg.placement === diagObj.db.PLACEMENT.LEFTOF) {
        maxMessageWidthPerActor[actor.prevActor] = common.getMax(
          maxMessageWidthPerActor[actor.prevActor] || 0,
          messageWidth
        );
      } else if (msg.placement === diagObj.db.PLACEMENT.OVER) {
        if (actor.prevActor) {
          maxMessageWidthPerActor[actor.prevActor] = common.getMax(
            maxMessageWidthPerActor[actor.prevActor] || 0,
            messageWidth / 2
          );
        }
        if (actor.nextActor) {
          maxMessageWidthPerActor[msg.from] = common.getMax(
            maxMessageWidthPerActor[msg.from] || 0,
            messageWidth / 2
          );
        }
      }
    }
  });
  log.debug("maxMessageWidthPerActor:", maxMessageWidthPerActor);
  return maxMessageWidthPerActor;
}
const getRequiredPopupWidth = function(actor) {
  let requiredPopupWidth = 0;
  const textFont = actorFont(conf);
  for (const key in actor.links) {
    const labelDimensions = utils.calculateTextDimensions(key, textFont);
    const labelWidth = labelDimensions.width + 2 * conf.wrapPadding + 2 * conf.boxMargin;
    if (requiredPopupWidth < labelWidth) {
      requiredPopupWidth = labelWidth;
    }
  }
  return requiredPopupWidth;
};
function calculateActorMargins(actors2, actorToMessageWidth, boxes2) {
  let maxHeight = 0;
  Object.keys(actors2).forEach((prop) => {
    const actor = actors2[prop];
    if (actor.wrap) {
      actor.description = utils.wrapLabel(
        actor.description,
        conf.width - 2 * conf.wrapPadding,
        actorFont(conf)
      );
    }
    const actDims = utils.calculateTextDimensions(actor.description, actorFont(conf));
    actor.width = actor.wrap ? conf.width : common.getMax(conf.width, actDims.width + 2 * conf.wrapPadding);
    actor.height = actor.wrap ? common.getMax(actDims.height, conf.height) : conf.height;
    maxHeight = common.getMax(maxHeight, actor.height);
  });
  for (const actorKey in actorToMessageWidth) {
    const actor = actors2[actorKey];
    if (!actor) {
      continue;
    }
    const nextActor = actors2[actor.nextActor];
    if (!nextActor) {
      const messageWidth2 = actorToMessageWidth[actorKey];
      const actorWidth2 = messageWidth2 + conf.actorMargin - actor.width / 2;
      actor.margin = common.getMax(actorWidth2, conf.actorMargin);
      continue;
    }
    const messageWidth = actorToMessageWidth[actorKey];
    const actorWidth = messageWidth + conf.actorMargin - actor.width / 2 - nextActor.width / 2;
    actor.margin = common.getMax(actorWidth, conf.actorMargin);
  }
  let maxBoxHeight = 0;
  boxes2.forEach((box) => {
    const textFont = messageFont(conf);
    let totalWidth = box.actorKeys.reduce((total, aKey) => {
      return total += actors2[aKey].width + (actors2[aKey].margin || 0);
    }, 0);
    totalWidth -= 2 * conf.boxTextMargin;
    if (box.wrap) {
      box.name = utils.wrapLabel(box.name, totalWidth - 2 * conf.wrapPadding, textFont);
    }
    const boxMsgDimensions = utils.calculateTextDimensions(box.name, textFont);
    maxBoxHeight = common.getMax(boxMsgDimensions.height, maxBoxHeight);
    const minWidth = common.getMax(totalWidth, boxMsgDimensions.width + 2 * conf.wrapPadding);
    box.margin = conf.boxTextMargin;
    if (totalWidth < minWidth) {
      const missing = (minWidth - totalWidth) / 2;
      box.margin += missing;
    }
  });
  boxes2.forEach((box) => box.textMaxHeight = maxBoxHeight);
  return common.getMax(maxHeight, conf.height);
}
const buildNoteModel = function(msg, actors2, diagObj) {
  const startx = actors2[msg.from].x;
  const stopx = actors2[msg.to].x;
  const shouldWrap = msg.wrap && msg.message;
  let textDimensions = utils.calculateTextDimensions(
    shouldWrap ? utils.wrapLabel(msg.message, conf.width, noteFont(conf)) : msg.message,
    noteFont(conf)
  );
  const noteModel = {
    width: shouldWrap ? conf.width : common.getMax(conf.width, textDimensions.width + 2 * conf.noteMargin),
    height: 0,
    startx: actors2[msg.from].x,
    stopx: 0,
    starty: 0,
    stopy: 0,
    message: msg.message
  };
  if (msg.placement === diagObj.db.PLACEMENT.RIGHTOF) {
    noteModel.width = shouldWrap ? common.getMax(conf.width, textDimensions.width) : common.getMax(
      actors2[msg.from].width / 2 + actors2[msg.to].width / 2,
      textDimensions.width + 2 * conf.noteMargin
    );
    noteModel.startx = startx + (actors2[msg.from].width + conf.actorMargin) / 2;
  } else if (msg.placement === diagObj.db.PLACEMENT.LEFTOF) {
    noteModel.width = shouldWrap ? common.getMax(conf.width, textDimensions.width + 2 * conf.noteMargin) : common.getMax(
      actors2[msg.from].width / 2 + actors2[msg.to].width / 2,
      textDimensions.width + 2 * conf.noteMargin
    );
    noteModel.startx = startx - noteModel.width + (actors2[msg.from].width - conf.actorMargin) / 2;
  } else if (msg.to === msg.from) {
    textDimensions = utils.calculateTextDimensions(
      shouldWrap ? utils.wrapLabel(
        msg.message,
        common.getMax(conf.width, actors2[msg.from].width),
        noteFont(conf)
      ) : msg.message,
      noteFont(conf)
    );
    noteModel.width = shouldWrap ? common.getMax(conf.width, actors2[msg.from].width) : common.getMax(
      actors2[msg.from].width,
      conf.width,
      textDimensions.width + 2 * conf.noteMargin
    );
    noteModel.startx = startx + (actors2[msg.from].width - noteModel.width) / 2;
  } else {
    noteModel.width = Math.abs(startx + actors2[msg.from].width / 2 - (stopx + actors2[msg.to].width / 2)) + conf.actorMargin;
    noteModel.startx = startx < stopx ? startx + actors2[msg.from].width / 2 - conf.actorMargin / 2 : stopx + actors2[msg.to].width / 2 - conf.actorMargin / 2;
  }
  if (shouldWrap) {
    noteModel.message = utils.wrapLabel(
      msg.message,
      noteModel.width - 2 * conf.wrapPadding,
      noteFont(conf)
    );
  }
  log.debug(
    `NM:[${noteModel.startx},${noteModel.stopx},${noteModel.starty},${noteModel.stopy}:${noteModel.width},${noteModel.height}=${msg.message}]`
  );
  return noteModel;
};
const buildMessageModel = function(msg, actors2, diagObj) {
  let process = false;
  if ([
    diagObj.db.LINETYPE.SOLID_OPEN,
    diagObj.db.LINETYPE.DOTTED_OPEN,
    diagObj.db.LINETYPE.SOLID,
    diagObj.db.LINETYPE.DOTTED,
    diagObj.db.LINETYPE.SOLID_CROSS,
    diagObj.db.LINETYPE.DOTTED_CROSS,
    diagObj.db.LINETYPE.SOLID_POINT,
    diagObj.db.LINETYPE.DOTTED_POINT
  ].includes(msg.type)) {
    process = true;
  }
  if (!process) {
    return {};
  }
  const fromBounds = activationBounds(msg.from, actors2);
  const toBounds = activationBounds(msg.to, actors2);
  const fromIdx = fromBounds[0] <= toBounds[0] ? 1 : 0;
  const toIdx = fromBounds[0] < toBounds[0] ? 0 : 1;
  const allBounds = [...fromBounds, ...toBounds];
  const boundedWidth = Math.abs(toBounds[toIdx] - fromBounds[fromIdx]);
  if (msg.wrap && msg.message) {
    msg.message = utils.wrapLabel(
      msg.message,
      common.getMax(boundedWidth + 2 * conf.wrapPadding, conf.width),
      messageFont(conf)
    );
  }
  const msgDims = utils.calculateTextDimensions(msg.message, messageFont(conf));
  return {
    width: common.getMax(
      msg.wrap ? 0 : msgDims.width + 2 * conf.wrapPadding,
      boundedWidth + 2 * conf.wrapPadding,
      conf.width
    ),
    height: 0,
    startx: fromBounds[fromIdx],
    stopx: toBounds[toIdx],
    starty: 0,
    stopy: 0,
    message: msg.message,
    type: msg.type,
    wrap: msg.wrap,
    fromBounds: Math.min.apply(null, allBounds),
    toBounds: Math.max.apply(null, allBounds)
  };
};
const calculateLoopBounds = function(messages2, actors2, _maxWidthPerActor, diagObj) {
  const loops = {};
  const stack = [];
  let current, noteModel, msgModel;
  messages2.forEach(function(msg) {
    msg.id = utils.random({ length: 10 });
    switch (msg.type) {
      case diagObj.db.LINETYPE.LOOP_START:
      case diagObj.db.LINETYPE.ALT_START:
      case diagObj.db.LINETYPE.OPT_START:
      case diagObj.db.LINETYPE.PAR_START:
      case diagObj.db.LINETYPE.PAR_OVER_START:
      case diagObj.db.LINETYPE.CRITICAL_START:
      case diagObj.db.LINETYPE.BREAK_START:
        stack.push({
          id: msg.id,
          msg: msg.message,
          from: Number.MAX_SAFE_INTEGER,
          to: Number.MIN_SAFE_INTEGER,
          width: 0
        });
        break;
      case diagObj.db.LINETYPE.ALT_ELSE:
      case diagObj.db.LINETYPE.PAR_AND:
      case diagObj.db.LINETYPE.CRITICAL_OPTION:
        if (msg.message) {
          current = stack.pop();
          loops[current.id] = current;
          loops[msg.id] = current;
          stack.push(current);
        }
        break;
      case diagObj.db.LINETYPE.LOOP_END:
      case diagObj.db.LINETYPE.ALT_END:
      case diagObj.db.LINETYPE.OPT_END:
      case diagObj.db.LINETYPE.PAR_END:
      case diagObj.db.LINETYPE.CRITICAL_END:
      case diagObj.db.LINETYPE.BREAK_END:
        current = stack.pop();
        loops[current.id] = current;
        break;
      case diagObj.db.LINETYPE.ACTIVE_START:
        {
          const actorRect = actors2[msg.from ? msg.from.actor : msg.to.actor];
          const stackedSize = actorActivations(msg.from ? msg.from.actor : msg.to.actor).length;
          const x = actorRect.x + actorRect.width / 2 + (stackedSize - 1) * conf.activationWidth / 2;
          const toAdd = {
            startx: x,
            stopx: x + conf.activationWidth,
            actor: msg.from.actor,
            enabled: true
          };
          bounds.activations.push(toAdd);
        }
        break;
      case diagObj.db.LINETYPE.ACTIVE_END:
        {
          const lastActorActivationIdx = bounds.activations.map((a) => a.actor).lastIndexOf(msg.from.actor);
          delete bounds.activations.splice(lastActorActivationIdx, 1)[0];
        }
        break;
    }
    const isNote = msg.placement !== void 0;
    if (isNote) {
      noteModel = buildNoteModel(msg, actors2, diagObj);
      msg.noteModel = noteModel;
      stack.forEach((stk) => {
        current = stk;
        current.from = common.getMin(current.from, noteModel.startx);
        current.to = common.getMax(current.to, noteModel.startx + noteModel.width);
        current.width = common.getMax(current.width, Math.abs(current.from - current.to)) - conf.labelBoxWidth;
      });
    } else {
      msgModel = buildMessageModel(msg, actors2, diagObj);
      msg.msgModel = msgModel;
      if (msgModel.startx && msgModel.stopx && stack.length > 0) {
        stack.forEach((stk) => {
          current = stk;
          if (msgModel.startx === msgModel.stopx) {
            const from = actors2[msg.from];
            const to = actors2[msg.to];
            current.from = common.getMin(
              from.x - msgModel.width / 2,
              from.x - from.width / 2,
              current.from
            );
            current.to = common.getMax(
              to.x + msgModel.width / 2,
              to.x + from.width / 2,
              current.to
            );
            current.width = common.getMax(current.width, Math.abs(current.to - current.from)) - conf.labelBoxWidth;
          } else {
            current.from = common.getMin(msgModel.startx, current.from);
            current.to = common.getMax(msgModel.stopx, current.to);
            current.width = common.getMax(current.width, msgModel.width) - conf.labelBoxWidth;
          }
        });
      }
    }
  });
  bounds.activations = [];
  log.debug("Loop type widths:", loops);
  return loops;
};
const renderer = {
  bounds,
  drawActors,
  drawActorsPopup,
  setConf,
  draw
};
const diagram = {
  parser: parser$1,
  db,
  renderer,
  styles
};
export {
  diagram
};
