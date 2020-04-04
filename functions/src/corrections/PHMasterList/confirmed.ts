export default function confirmed(original: string | null, phMasterl: string): string | null {
  const caseNumber = parseInt(phMasterl.substring(2), 10);

  // Dates are month-day-year
  if (caseNumber === 1) return '1/30/2020'; // https://www.doh.gov.ph/doh-press-release/doh-confirms-first-2019-nCoV-case-in-the-country
  if (caseNumber === 2) return '2/1/2020'; // https://www.doh.gov.ph/press-release/DOH-reveals-more-negative-2019-nCoV-cases-confirms-first-nCoV-ARD-death-in-PH
  if (caseNumber === 3) return '2/5/2020'; // https://www.doh.gov.ph/doh-press-release/doh-confirms-3rd-2019-nCoV-ARD-case-in-PH
  if (caseNumber >= 4 && caseNumber <= 5) return '3/6/2020'; // https://www.doh.gov.ph/doh-press-release/DOH-CONFIRMS-TWO%20MORE-CASES-OF-COVID-19-IN-PH
  if (caseNumber === 6) return '3/7/2020'; // https://www.doh.gov.ph/doh-press-release/doh-confirms-local-transmission-of-covid-19-in-ph
  if (caseNumber >= 7 && caseNumber <= 10) return '3/8/2020'; // https://www.doh.gov.ph/doh-press-release/DOH-REPORTS-4-NEW-COVID-19-PATIENTS%3B-CASES-UP-TO-10
  if (caseNumber >= 11 && caseNumber <= 20) return '3/9/2020'; // https://www.doh.gov.ph/doh-press-release/doh-reports-10-new-covid-19-patients-cases-up-to-20
  if (caseNumber >= 21 && caseNumber <= 24) return '3/9/2020'; // https://www.doh.gov.ph/doh-press-release/doh-reports-11-new-covid-19-cases
  if (caseNumber >= 25 && caseNumber <= 33) return '3/10/2020'; // https://www.doh.gov.ph/doh-press-release/doh-reports-11-new-covid-19-cases
  if (caseNumber >= 34 && caseNumber <= 49) return '3/11/2020'; // https://www.doh.gov.ph/doh-press-release/DOH-SENDS-OFF-NCC-REPATS%3B-UPDATES-ON-COVID-19-CASES
  if (caseNumber >= 50 && caseNumber <= 52) return '3/12/2020'; // https://www.doh.gov.ph/doh-press-release/DOH-REPORTS-1-COVID-DEATH-AND-3-NEW-CASES
  if (caseNumber >= 53 && caseNumber <= 64) return '3/13/2020'; // https://www.doh.gov.ph/doh-press-release/doh-back-11th-iatf-resolutions-reports-12-new-covid-19-cases-in-ph
  if (caseNumber >= 65 && caseNumber <= 98) return '3/14/2020'; // https://www.doh.gov.ph/doh-press-release/doh-reports-34-new-covid-19-cases-seeks-public-cooperation
  if (caseNumber >= 99 && caseNumber <= 111) return '3/14/2020'; // https://www.facebook.com/photo?fbid=3144727018871862&set=a.157979910879936
  if (caseNumber >= 112 && caseNumber <= 140) return '3/15/2020'; // https://www.facebook.com/photo/?fbid=3146920488652515&set=a.157979910879936
  if (caseNumber >= 141 && caseNumber <= 142) return '3/16/2020'; // https://www.facebook.com/photo?fbid=3149692848375279&set=a.157979910879936
  if (caseNumber >= 143 && caseNumber <= 187) return '3/17/2020'; // https://www.facebook.com/photo/?fbid=3151986978145866&set=a.157979910879936
  if (caseNumber >= 188 && caseNumber <= 202) return '3/18/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3154616694549561
  if (caseNumber >= 203 && caseNumber <= 217) return '3/19/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3157211360956761?__cft__[0]=AZVgNApUGV569jKSkzQdO30fR0ZH8SS3AJCruKCRvVwXRvZseoUXM5PYUejKw6FWX9Bv32tVZBv0roIg381DuWdf3MiDaDlYops6cjy5YlLRqB4Se-6RaSoyc4RBQAEhZK94jnIjL1Z2D_EoCs8ibsVXZznLv3_nyvWOeDnKxjmZgg&__tn__=%2CO%2CP-R
  if (caseNumber >= 218 && caseNumber <= 230) return '3/20/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3159935107351053?__cft__[0]=AZX4C88TdbnvPF6QWylrXFdQMpDQp-LQs1k-hLnZyr5RmhTi_i-EXX5UicCGSNCIQ07DqzoZ8w_jp1RMBWyfSHyvbU86P3L1TkUCIKREx-EA1XSxz_ziSOV1-5fuK_6ar60amr2tz7flkLw5_ffLT8FTKpRkLsgrg_CSJQHa3Jmh-A&__tn__=%2CO%2CP-R
  if (caseNumber >= 231 && caseNumber <= 307) return '3/21/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3162825907061973?__cft__[0]=AZUkOJdtXO7u3V_Rx3P2i8rjMlmC0HrPhexOQB_-glwDbJ8UEEyLGoAeL_oAmNt5hf_68UubsGkyzfz7yLw8WkjlVtAYm8okHXwoO-yKw_pclM6w-1d8nlSE467fLNBsU-XTc71FTO10YoBNR06cx_Y9xW2uGfLfe6pl6Dp8T78dDQ&__tn__=%2CO%2CP-R
  if (caseNumber >= 308 && caseNumber <= 380) return '3/22/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3165612663449964?__cft__[0]=AZV33-WH_49_iHGlTJLVDnR5BfpTc-lzoJT-0WwYES3NqmACC3qPTtLNf3M6V30vimvsDS_OBkCi8zUYl0xnqCqJ-E8vTVV847JiXJ7VNTvRxBL0t5-nD2t_qw9EshZ_rRgYOqaJAf6N8FUz6dIcBoa9ipE02_qRajSbcHHaGGjuyQ&__tn__=%2CO%2CP-R
  if (caseNumber >= 381 && caseNumber <= 462) return '3/23/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3168534729824424?__cft__[0]=AZV15aK_cmThOK9PNOKxl9VNFvZ2F81iu714ZRZHeortnaxTn3661cBR_2JW2LHzsZRR1-aQwzs5PlOiuBS5WmN2HIo1CnedcanqnM6bbeiy2-0DYtGmDPGPk0gCIzHcbhXLc234YSg4AEb3TQCxWcIKOZN81nl--Q0ASEzM-yVIBQ&__tn__=%2CO%2CP-R
  if (caseNumber >= 463 && caseNumber <= 552) return '3/24/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3171219626222601?__cft__[0]=AZVxVlijWHuzS4NrKhbVd-KaU_44JaJhODa1U4z9G_3y9HSCFEODdwaBJ8D0ZLCSs8NlgK46fXrzmFqDUu5AFoz3fzYYk-IN7lFswAc86difD88A9l0cFe5kJ9xabH4CNvho3-JcrFLAtl_MTmOWdiXfM7qqHgI_msj-G14uYDv5qQ&__tn__=%2CO%2CP-R
  if (caseNumber >= 553 && caseNumber <= 636) return '3/25/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3173882412622989?__cft__[0]=AZWv1QZypElBTYsiaUS382Ur3oHvPWYWt3FzdUppOhOnXzpKB5u3Oy_i5LmBGrYsH96QEwHGOYBeInSKDVuj-MO86pa-Jiz8lDNnr8WPAwGli5pHxCNv54NWTRFQa7KNff4JVISnT0ZuxAjYFYH9Uq6IxJdHH8Ycn1KxuO0mEJtiww&__tn__=%2CO%2CP-R
  if (caseNumber >= 637 && caseNumber <= 707) return '3/26/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3176723355672228?__cft__[0]=AZXBvnuBPgGBujOVW0wpQz3uEOukNwicwaS2PQdbmrWnPFBbrs_MrQgZHZ3bCvQQsQSJyxaRtEltuhS9MrvHg4QN3hhtQUt_b_U-p64EBB18wnq_QWv7H-OSu_oXvI6f33xhrqcDtBAVqLzsRjHe3IgdTc34MXRziOzI9gD0hWSYcA&__tn__=%2CO%2CP-R
  if (caseNumber >= 708 && caseNumber <= 803) return '3/27/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3179518628726034?__cft__[0]=AZVW7JJrAcU8NWa1F4hgIxnpE-cd80tNICsYony8myuIOI4JhYq2XLnJxy8tZkrAZcS5oa7ZMAvVgMnJvgaFA7ctTbEGJ9_gpLHKmXxOinCW5r98nGMY-5TshrnB7iFYjN5nXxyvg3rwZ8yfCrtC3kumiaBXw_xmDyWTVJU_RpwWyw&__tn__=%2CO%2CP-R
  if (caseNumber >= 804 && caseNumber <= 1075) return '3/28/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3182409475103616?__cft__[0]=AZWJJTU-xqRicynOEuIgRwqynla5BGFlmiR5qrUOrj7_sNU4k2P-XlcRN-jKxjpiubWF2HdzV7e-LQ0iLelfF2RG9hwbmVUV4teIElCOT-cQGOCVo3riZctdIdHsttUHZruvSPbEL9JwTg_rjlwFnLApcDdoxS4Yuw0aU1E3qYUhpQ&__tn__=%2CO%2CP-R
  if (caseNumber >= 1076 && caseNumber <= 1418) return '3/29/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3185062811504949?__cft__[0]=AZV66d0-fTxFkXRDWqOPR5f6b-Fy_IqlUz78P1e8RGP3nnXpbn1Lj8VGuXJZcQtvIAZp5St3YKT1E6T48-5aXhDMDJMOVqp81RqyvFsc7BEIZzl5y90w81-lcLqCugAxix8I6GQiPSnFSDwyj4szEn4FzSpI0THRsjBUdLEgK0fS5w&__tn__=%2CO%2CP-R
  if (caseNumber >= 1419 && caseNumber <= 1546) return '3/30/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3187685461242684?__cft__[0]=AZWYX82XR8zmI4uJLuaS4SGf7AtLD5geES8t_U_G3UF4uvSDoVEZgDCErdY1Gxih73GYqA0uqwB7og9LlCk5wLhUtScbkfrP_lx6hT6nI49ehkD8ERH7JBHKCn_xc246vyPPUBOGFnCCOx1U6-_a4r6cx29mQLPGBiS1cdf2rNwxyg&__tn__=%2CO%2CP-R
  if (caseNumber >= 1547 && caseNumber <= 2084) return '3/31/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3190365760974654?__cft__[0]=AZUio9nAsiG7TEiKXW_f3u79-x5KYSqPw09Zn5QVKbdbrXY6EpA1xa67V3Pllt-dN8HDl3PNBBV8_mqXLDYKaKUDjz3I7PW1DcEl7eRjH4k3pISwvq4hquI9v_ugcLMioRiaT4kfGIzSE27rb_ZfSpggUiRSJHSQWLWNON9CfAtRoA&__tn__=%2CO%2CP-R
  if (caseNumber >= 2085 && caseNumber <= 2311) return '4/1/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3190365760974654?__cft__[0]=AZUio9nAsiG7TEiKXW_f3u79-x5KYSqPw09Zn5QVKbdbrXY6EpA1xa67V3Pllt-dN8HDl3PNBBV8_mqXLDYKaKUDjz3I7PW1DcEl7eRjH4k3pISwvq4hquI9v_ugcLMioRiaT4kfGIzSE27rb_ZfSpggUiRSJHSQWLWNON9CfAtRoA&__tn__=%2CO%2CP-R
  if (caseNumber >= 2312 && caseNumber <= 2633) return '4/2/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3195677097110187?__cft__[0]=AZU6pgG6RCszaXMGaTHIpC7A2hpklMafYSQq2s0OP2Qo8csAFUPNUYQdIi07m6pOQYILxhhOCJzce3QonSX_rxW7D3PfMv6mbqamzgHyh-PmYsbGXCB9SG9zwBOOuVAmMEXhxDQhKl1qfX-xe-gVHd2m7guxkJ-azNZr0Zha4DYScg&__tn__=%2CO%2CP-R
  if (caseNumber >= 2634 && caseNumber <= 3018) return '4/3/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3195677097110187?__cft__[0]=AZU6pgG6RCszaXMGaTHIpC7A2hpklMafYSQq2s0OP2Qo8csAFUPNUYQdIi07m6pOQYILxhhOCJzce3QonSX_rxW7D3PfMv6mbqamzgHyh-PmYsbGXCB9SG9zwBOOuVAmMEXhxDQhKl1qfX-xe-gVHd2m7guxkJ-azNZr0Zha4DYScg&__tn__=%2CO%2CP-R
  if (caseNumber >= 3019 && caseNumber <= 3094) return '4/4/2020'; // https://www.facebook.com/OfficialDOHgov/posts/3200550973289466?__cft__[0]=AZUDV6tcwvkh0UNr7OG9H6vGXOPHll5_v-U9llTvo8BwuZZ7QoSTE84fpySPVQh0t0-8SQuJrhniy6ls1sFaPbwphuHCBJF21b39Xu63XIxay5_0_eyNHGVgwb3xmthBngMtFM2-NjWT3as4xMCDNnfZtgk0aeM4tshLjW0jtcs-0A&__tn__=%2CO%2CP-R
  if (caseNumber > 3094) return '4/5/2020';


  return original;
}
