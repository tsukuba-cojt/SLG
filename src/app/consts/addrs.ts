export enum addrs {
  //LED
 
  // LED_RF_R,
  // LED_RF_G,
  // LED_RF_B,
  // LED_RF_DIM,

  // LED_LR_R,
  // LED_LR_G,
  // LED_LR_B,
  // LED_LR_DIM,

  // LED_RR_R,
  // LED_RR_G,
  // LED_RR_B,
  // LED_RR_DIM,

  // LEDSIMYU
  LED_LF_R = 30,
  LED_LF_G,
  LED_LF_B,
  LED_LF_DIM,

  LED_RF_R = 36,
  LED_RF_G,
  LED_RF_B,
  LED_RF_DIM,

  LED_LR_R = 42,
  LED_LR_G,
  LED_LR_B,
  LED_LR_DIM,

  LED_RR_R = 48,
  LED_RR_G,
  LED_RR_B,
  LED_RR_DIM,

  // LED_KENBAN_R = 30,
  // LED_KENBAN_G,
  // LED_KENBAN_B,
  // LED_KENBAN_DIM = 36,
  LED_KENBAN_R = 54,
  LED_KENBAN_G,
  LED_KENBAN_B,
  LED_KENBAN_DIM,

  //anomiti
  anomiti = 17,

  //1SUS
  SUS1_1 = 18,
  SUS1_2,
  SUS1_3,
  SUS1_4,
  SUS1_5,

  //2SUS
  SUS2_1 = 23,
  SUS2_2 = 24,
  SUS2_3 = 26,

  //3SUS
  SUS3_1 = 27,
  SUS3_2,

  //FR
  FR = 25,

  //SS
  SS = 29,

  // BL_1A = 1,
  // BL_1B,
  // BL_1C,
  // BL_1D,
  // BL_1E,
  // BL_1F,
  // BL_2A,
  // BL_2B,
  // BL_2C,
  // BL_2D,
  // BL_2E,
  // BL_2F,
  // BL_3A,
  // BL_3B,
  // BL_3C,
  // BL_3D,
  // BL_3E,
  // BL_3F,

  // CL_ITO_1 = 19,
  // CL_ITO_2,
  // CL_ITO_3 = 30,

  // PS_1 = 21,
  // PS_2,
  // PS_3,
  // PS_4,
  // PS_5,
  // PS_6,

  // // 1Sus
  // NGR_W_1L = 31,
  // NGR_P_1L,

  // SUS_B_1L,
  // SUS_W_1L,
  // SUS_A_1L,

  // SUS_BEAM_1L,
  // SUS_SPOT_1L,

  // SUS_PAR_1CL,
  // SUS_SPOT_1C,
  // SUS_PAR_1CR,

  // SUS_B_1R,
  // SUS_W_1R,
  // SUS_A_1R,

  // SUS_SPOT_1R,
  // SUS_BEAM_1R,

  // NGR_W_1R,
  // NGR_B_1R,

  // // 2Sus
  // NGR_W_2L = 49,
  // NGR_P_2L,

  // SUS_B_2L,
  // SUS_W_2L,
  // SUS_A_2L,

  // SUS_BEAM_2L,
  // SUS_PAR_2L,

  // SUS_PAR_2CL,
  // SUS_SPOT_2C,
  // SUS_PAR_2CR,

  // SUS_B_2R,
  // SUS_W_2R,
  // SUS_A_2R,

  // SUS_PAR_2R,
  // SUS_BEAM_2R,

  // NGR_W_2R,
  // NGR_B_2R,

  // // 3Sus

  // // NGR_3L_W = 67,
  // // NGR_3L_A,

  // SUS_PAR_A_3L = 69,
  // SUS_PAR_W_3L,

  // SUS_BEAM_3L,

  // SUS_3L_B,
  // SUS_3L_W,
  // SUS_3L_A,

  // SUS_PAR_W_3C1,
  // SUS_PAR_W_3C2,

  // SUS_3R_B,
  // SUS_3R_W,
  // SUS_3R_A,

  // SUS_BEAM_3R,

  // SUS_PAR_W_3R,
  // SUS_PAR_A_3R,

  // // NGR_3R_W,
  // // NGR_3R_B,

  // // CL
  // CL_01 = 133,
  // CL_02,
  // CL_03,
  // CL_04,
  // CL_05,
  // CL_06,
  // CL_07,
  // CL_08,
  // CL_09,
  // CL_10,
  // CL_11,
  // CL_12,

  // // FS
  // FS_1 = 149,
  // FS_2,
  // FS_3,
  // FS_4,
  // FS_5 = 161,
  // FS_6,
  // FS_7,
  // FS_8,

  // // BP
  // BP_1 = 175,
  // BP_2,
  // BP_3,
  // BP_4,
  // BP_5,
  // BP_6,

  // // SS
  // SS_1L = 187,
  // SS_2L = 190,
  // SS_1R = 199,
  // SS_2R = 202,

  // // 奥スタンド
  // FL_PAR_1 = 196,
  // FL_PAR_2,
  // FL_PAR_3 = 209,
  // FL_PAR_4,

  // // ムービング
  // GT15_L_COLOR = 300,
  // GT15_L_GOBO,
  // GT15_L_ROTATE,
  // _GT15_L_UNKNOWN_4,
  // GT15_L_PAN,
  // GT15_L_TILT,
  // _GT15_L_UNKNOWN_7,
  // GT15_L_PRISM,
  // GT15_L_FOCUS,
  // GT15_L_STROBE,
  // GT15_L_DIM,

  // MARTIN_L_LIGHT = 317,
  // MARTIN_L_DIM,
  // MARTIN_L_COLOR_1,
  // MARTIN_L_COLOR_2,
  // MARTIN_L_GOBO_TYPE,
  // MARTIN_L_GOBO_ROTATE,
  // MARTIN_L_GOBO_SCROLL,
  // MARTIN_L_FOCUS,
  // MARTIN_L_IRIS,
  // MARTIN_L_PRISM,
  // MARTIN_L_PAN,
  // MARTIN_L_TILT,

  // MARTIN_R_LIGHT = 334,
  // MARTIN_R_DIM,
  // MARTIN_R_COLOR_1,
  // MARTIN_R_COLOR_2,
  // MARTIN_R_GOBO_TYPE,
  // MARTIN_R_GOBO_ROTATE,
  // MARTIN_R_GOBO_SCROLL,
  // MARTIN_R_FOCUS,
  // MARTIN_R_IRIS,
  // MARTIN_R_PRISM,
  // MARTIN_R_PAN,
  // MARTIN_R_TILT,

  // GT15_R_COLOR = 351,
  // GT15_R_GOBO,
  // GT15_R_ROTATE,
  // _GT15_R_UNKNOWN_4,
  // GT15_R_PAN,
  // GT15_R_TILT,
  // _GT15_R_UNKNOWN_7,
  // GT15_R_PRISM,
  // GT15_R_FOCUS,
  // GT15_R_STROBE,
  // GT15_R_DIM,

  // // LED PAR
  // LED_1_R = 368,
  // LED_1_G,
  // LED_1_B,
  // LED_1_DIM,

  // LED_2_R,
  // LED_2_G,
  // LED_2_B,
  // LED_2_DIM,

  // LED_3_R,
  // LED_3_G,
  // LED_3_B,
  // LED_3_DIM,

  // LED_4_R,
  // LED_4_G,
  // LED_4_B,
  // LED_4_DIM,

  // // ミニムービング
  // MM_1_PAN = 374,
  // MM_1_TILT,
  // MM_1_COLOR,
  // MM_1_GOBO,
  // MM_1_STROBE,
  // MM_1_DIM,

  // MM_2_PAN = 383,
  // MM_2_TILT,
  // MM_2_COLOR,
  // MM_2_GOBO,
  // MM_2_STROBE,
  // MM_2_DIM,

  // MM_3_PAN = 392,
  // MM_3_TILT,
  // MM_3_COLOR,
  // MM_3_GOBO,
  // MM_3_STROBE,
  // MM_3_DIM,

  // MM_4_PAN = 399,
  // MM_4_TILT,
  // MM_4_COLOR,
  // MM_4_GOBO,
  // MM_4_STROBE,
  // MM_4_DIM,

  // AUDIENCE_1 = 483,
  // AUDIENCE_2 = 484,
  // AUDIENCE_3 = 487,
  // AUDIENCE_4 = 488,

  // UH_1 = 85,
  // UH_2,
  // UH_3,
  // UH_4,
  // UH_5,
  // UH_6,
  // UH_7,
  // UH_8,
  // UH_9,
  // UH_10,
  // UH_11,
  // UH_12,

  // LH_1 = 109,
  // LH_2,
  // LH_3,
  // LH_4,
  // LH_5 = 115,
  // LH_6,
  // LH_7,
  // LH_8,
}
