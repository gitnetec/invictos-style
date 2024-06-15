document.addEventListener("DOMContentLoaded", () => {
  const cssCode = `
  :root {
  --main_color: #0e0e0e;
  --secondary_color: #151515;
  --third_color: #141519;
    
  --selectOdd: #52b86a;
  --login_button_bg: #232423;
  --odds_aumentadas_bg: #2B2E34;
  --cassino_bg: #151619;
  
  
  --main_red: #ee0000;
  --main_dark_red: #880000;
  --main_black: #000000;
  
    --button-gradient: linear-gradient(180deg, var(--main_black) 0%, var(--main_dark_red) 100%);
    --bg-selected: #1c0103;
    --primary_gradient: linear-gradient(90deg, var(--main_color), var(--secondary_color));
    --primary_reverse_gradient: linear-gradient(270deg, var(--main_color), var(--secondary_color));
    --red_gradient: linear-gradient(90deg, var(--main_red), var(--main_dark_red));
    --black_red_gradient: linear-gradient(
            90deg,
            var(--main_black) 0%,
            var(--main_dark_red) 50%,
            var(--main_black) 100%
    );
    --transparent_to_red_gradient: linear-gradient(
            90deg,
            rgba(255, 0, 0, 0) 0%,
            rgba(254, 0, 0, 0.01) 0.01%,
            rgba(252, 0, 0, 0.02) 0.02%,
            var(--main_dark_red) 100%
    );
  
    --main_white: #fff;
    --gray-3: #2b2e34;
  }
  
  * {
    font-family: Poppins, sans-serif;
  }
  
  #fe_main,
  .user-logged-in #fe_main {
    padding-top: 70px;
  }
  
  #fe_header {
    background: var(--black_red_gradient);
    height: 70px;
  }
  
  .mob_header {
    height: 69px;
    background: var(--primary_gradient);
  }
  
  .log_reg_sec a {
    padding: 0px;
    justify-content: center;
    border-radius: 0px;
    width: 70px;
    font-size: 0;
    position: relative;
    z-index: 1;
    height: 40px;
    background-color: transparent;
  }
  
  .log_reg_sec a:first-child {
    width: 50px;
  }
  
  .log_reg_sec a:last-child {
    width: 100px;
  }
  
  .log_reg_sec a::before {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 98px;
    /* content: ""; */
    font-size: 13px;
    z-index: -1;
    /* background-color: var(--main_red); */
  }
  
  .inner,
  #fe_main {
    background: var(--main_black);
  }
  
  .mob_header.logged-out {
    align-items: center;
  }
  
  .main_menu {
    background-color: transparent;
  }
  
  .mob_header .logo_area {
    height: auto;
  }
  
  .mob_header .log_reg_sec {
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 10px;
  }
  .mob_header .log_reg_sec a {
  text-transform: capitalize; 
  }
  .log_reg_sec a:first-child {
  margin-right: 10px;
  border-radius: 36px;
  }
  
  .log_reg_sec a:last-child {
    color: #fff;
    border-radius: 16px;
    background: var(--button-gradient);
    box-shadow: 0px 4px 15px 0px rgba(255, 0, 0, 0.22);
    padding: 1px;
    }
  
  .betslip_bottom_bar {
    border-bottom: 40px solid var(--gray-3);
    bottom: 200px;
  }
  
  .betslip_bottom_bar .search_icon:after {
    color: var(--main_red);
  }
  
  .betslip_icon {
    background-image: url("/uploads/files/betslip-icon-png-663d2896cc94f.png");
  }
  
  .skin-120 .sportsbook_menu .selected.menu_item span,
  .sportsbook_container .sportbook_status .sportsbook_status_btn.active a {
    color: var(--main_red)
  }
  
  .skin-120 .sportsbook_menu {
    display: none;
  }
  
  .sportsbook_container .sportbook_status {
    background: var(--main_color);
    padding-top: 8px;
  }
  
  .sportsbook_container .sportsbook_categories {
    background: var(--third_color);
    padding: 16px 4px;
  }
  
  .sportsbook_container .sportbook_status .sportsbook_status_btn:hover,
  .sportsbook_container .sportbook_status .sportsbook_status_btn.active {
    background-color: var(--third_color);
  }
  
  .sportsbook_container .sportsbook_categories .sportsbook_category,
  .sportsbook_container .sportbook_status .sportsbook_status_btn {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
  
  .sportsbook_container .sportsbook_categories .sportsbook_category.selected,
  .sportsbook_container
  .sportsbook_categories
  .sportsbook_category.selected:hover,
  .sportsbook_container
  .sportsbook_categories
  .sportsbook_category.selected:focus {
    color: #fff;
    background-color: var(--third_color);
  
  }
  
  .sportsbook_container .sportsbook_categories .sportsbook_category.selected {
    background: var(--button-gradient);
    box-shadow: 0px 4px 15px 0px rgba(255, 0, 0, 0.22);
  }
  
  .sportsbook_container .sportsbook_categories .sportsbook_category.selected:before {
    content: "";
    background: var(--main_black);
    width: 89%;
    height: 61px;
    display: flex;
    position: absolute;
    z-index: 0;
    padding: 4px;
    left: 0.5px;
    top: 1px;
    border-radius: 24px;
  }
  
  .sportsbook_container .sportsbook_categories .sportsbook_category {
    background: transparent;
    min-width: 64px;
    border-radius: 24px;
  }
  
  .sportsbook_container .sportsbook_categories .sportsbook_category .cat_name {
    position: relative;
    z-index: 1;
  }
  
  .selected .sporticon {
    background-color: #fff;
  }
  
  .sportsbook_days_filtering {
    border-collapse: unset;
    display: none;
  }
  
  .sportsbook_filter .single_filter.main {
    background: var(--accent2_color);
    border-bottom: 2px solid var(--gray-3);
  }
  
  .sportsbook_filter .single_filter {
    padding: 12px 4px;
  }
  .sportsbook_filter .single_filter img {
    width: 24px;
  }
  
  .sportsbook_filter .single_filter {
    background-color: var(--secondary_color);
  }
  
  .sportsbook_filter .filter_submenu a {
    background-color: var(--third_color);
    border-bottom: 1px solid var(--secondary_color);
    padding: 10px 20px;
  }
  
  .sportsbook_days_filtering .days_filter {
    padding: 11px 5px;
  }
  
  #sports_odds .league_events_wrapper .sb_sec_title {
    background: var(--secondary_color);
    height: 40px !important;
    width: 100%;
    border: 0;
  }
  
  .sportsbook_container .sportsbook_categories .sportsbook_category .cat_name span {
    font-weight: bold;
  }
  
  #sports_odds .sb_sec_title {
    padding: 0px;
  }
  
  .go_back_btn {
    left: 0px;
  }
  
  .go_back_btn:after {
    top: 8px;
    background-color: gray;
  }
  
  .sports_col .slt_info {
    height: 40px !important;
  }
  
  .go_back_btn:before {
    line-height: 40px;
  }
  
  .sportsbook_container .status_title {
    background-color: var(--secondary_color);
    margin-bottom: 0px !important;
    margin-top: 6px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    padding: 14px 10px;
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section {
    background-color: var(--main_color);
    border-bottom: 0px !important;
    padding: 4px 2px;
    flex-direction: column;
  }
  
  
  .sportsbook_container .status_title span {
    color: #fff;
    font-size: 16px;
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_odds_selectors .selection_box {
    border-radius: 16px;
    height: 40px;
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_odds_selectors {
    padding: 0px;
    width: 100%;
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_odds_selectors .selection_box {
    background-color: var(--cassino_bg);
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_event_section {
    padding: 8px;
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_event_section .spn_event_details {
    margin-top: 0px;
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_more_options {
    margin-bottom: 0px;
    background: var(--grey_d_20);
    display: flex;
    flex-wrap: wrap;
    width: 46%;
    margin: 4px 8px;
    box-sizing: border-box;
    border-radius: 16px;
    padding: 6px;
    justify-content: center;
    display: none;
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_more_options:nth-child(3) {
    margin-right: 4px;
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_more_options a {
    color: #fff;
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_more_options a > div {
    gap: 6px !important;
  }
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_more_options a > div > svg {
    fill: #fff;
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_odds_selectors .selection_box .selector span, .sportsbook_container .sportsbook_events .spn_odds_section .spn_odds_selectors .selection_box .odd span {
    color: #fff;
    font-size: 14px;
    display: flex;
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_event_section .spn_competitor {
    margin-bottom: 4px;
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section:first-child:before {
    height: 0px;
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section:before {
    content: "";
    width: 100%;
    height: 2px;
    background: var(--third_color) !important;
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_event_section {
    width: 100%;
  }
  
  body .single_event_sle_info, body .single_event_dt {
    padding: 8px 0px;
  }
  
  .single_event_holder.sport_1 .single_event_info {
    background: var(--secondary_color)
  }
  
  body .single_ev_btc_wrapper.event_filter a {
    border-bottom: 0px;
    margin: 0px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
  }
  
  body .single_ev_btc_wrapper.event_filter a.selected {
    border-bottom: 0px;
    border-top: 0px;
    border-radius: 16px;
    padding: 10px;
    background: var(--button-gradient);
    z-index: 1;
    position: relative;
    
  }
  body .single_ev_btc_wrapper.event_filter a.selected:before {
    content: "";
    display: flex;
    height: 47px;
    width: 100%;
    position: absolute;
    background: var(--main_color);
    border-radius: 16px;
    z-index: -1;
    top: 0px;
    left: 0px;
    box-shadow: 0px 4px 15px 0px rgba(255, 0, 0, 0.22)
  }
  
  body .single_ev_btc_wrapper.event_filter a {
    border-bottom: 0px;
    border-top: 0px;
  }
  
  body .single_ev_btc_wrapper.event_filter a span {
    padding: 0px;
  }
  
  body .single_ev_btc_wrapper.event_filter.show a:first-child span {
    display: none;
  }
  
  #sports_odds .event_section .event_type_title {
    background: var(--cassino_bg);
    padding: 8px 10px;
    text-align: start;
  }
  
  .single_event_odds .odds_table {
     background: var(--cassino_bg) !important;
     padding: 10px;
  }
  
  .single_event_odds .odds_table.odds_tbl_cat3.odds_tbl_bt_1644 .event_type_selections_3, .single_event_odds .odds_table.odds_tbl_cat3.odds_tbl_bt_1648 .event_type_selections_3 {
    grid-template-columns: 1fr 1fr
  }
  
  #sports_odds .event_section .event_type_selections div a {
     border-right: 0px solid var(--main_color);
     padding: 12px 0px 10px 8px;
     display: flex;
     justify-content: space-between;
     width: 90%;
    flex-direction: row;
  }
  
  
  .event_section .odds_trs .ev_sel_odd_result.selected {
    background: var(--selectOdd) !important;
  }
  .event_section .odds_trs .ev_sel_odd_result.selected a span {
    color: var(--main_black) !important
  }
  
  #sports_odds .event_section .event_type_selections div a .selector_name {
     color: #fff;
     margin-bottom: 3px;
     font-weight: 500;
     font-size: 10px;
  }
  
  #sports_odds .event_section .event_type_selections div a .selecter_odd {
    font-weight: 700
  }
  
  .event_section .odds_trs .ev_sel_odd_result.selected a span {
    color: var(--main_black);
  }
  
  
  #sports_odds .event_section .event_type_selections div {
    background: var(--third_color);
  }
  
  .sr-bb .srt-base-2 {
    background-color: var(--secondary_color) !important;
    color: #fff !important;
  }
  
  .sr-bb .srt-base-1-primary, .sr-bb .sr-tabs-tab__wrapper, .sr-bb .srt-base-2-is-hoverable:hover, .sr-bb .srt-base-2-is-hoverable, .sr-bb .srt-text-secondary {
    color: #fff !important;
  }
  
  .sr-bb .sr-tabs-tab__indicator.srm-is-active {
    color: var(--main_red) !important;
  }
  
  .sr-bb .sr-cb-market-list__list-wrapper {
    background-color: var(--third_color) !important
  }
  
  .srct-tab--active span {
    color: var(--main_red) !important;
  
  }
  
  .sr-bb .sr-bb {
    background: var(--third_color) !important;
  }
  
  #sports_odds > div > div.sports_scroll_single_event > div > div.single_event_odds > div > div.bet_types_cols_holder > div > div > div > div > div > div.sr-bb.sr-cb-main-content.sr-ltr > div > div.sr-cb-main-content__wrapper.srt-neutral-13.srct-cb-container > div > div:nth-child(2) > div > div > div.sr-cb-market-view__wrapper.sr-bb.sr-cb-tabs--is-capitalized > div.sr-cb-market-view__slides > div > div:nth-child(1) > div > div > div.sr-scrollbars__container > div:nth-child(1) > div > div > div.sr-cb-outcome-grid__bet-assist > div > div > div > div > div > div > div > div:nth-child(2) > div.sr-ba-horizontal-title__wrapper.srt-text-secondary.srm-is-uppercase {
    margin-bottom: 8px;
  
  }
  
  .sr-bb .sr-cb-bet-builder-odds__wrapper {
    padding: 8px;
  }
  
  #sports_odds > div > div.sports_scroll_single_event > div > div.single_event_odds > div > div.bet_types_cols_holder > div > div > div > div > div > div.sr-bb.sr-cb-main-content.sr-ltr > div > div.sr-cb-main-content__wrapper.srt-neutral-13.srct-cb-container > div > div:nth-child(2) > div > div > div.sr-cb-market-view__wrapper.sr-bb.sr-cb-tabs--is-capitalized > div.sr-cb-market-view__bet-builder > div > div > div > div.sr-cb-betbuilder-animate__wrapper.srm-slide-up.srm-is-animating > div > div.sr-cb-betbuilder-animate__button > div, #sports_odds > div > div.sports_scroll_single_event > div > div.single_event_odds > div > div.bet_types_cols_holder > div > div > div > div > div > div.sr-bb.sr-cb-main-content.sr-ltr > div > div.sr-cb-main-content__wrapper.srt-neutral-13.srct-cb-container > div > div:nth-child(1) > div > div.sr-cb-market-list__bet-builder > div > div > div > div.sr-cb-betbuilder-animate__wrapper.srm-slide-up.srm-is-animating.srm-is-top.srm-is-market > div > div.sr-cb-betbuilder-animate__button > div, #sports_odds > div > div.sports_scroll_single_event > div > div.single_event_odds > div > div.bet_types_cols_holder > div > div > div > div > div > div.sr-bb.sr-cb-main-content.sr-ltr > div > div.sr-cb-main-content__wrapper.srt-neutral-13.srct-cb-container > div > div:nth-child(1) > div > div.sr-cb-market-list__bet-builder > div > div > div > div.sr-cb-betbuilder-animate__wrapper.srm-slide-up.srm-is-animating.srm-is-top.srm-is-market > div > div.sr-cb-betbuilder-animate__outcome-list > div > div > div:nth-child(1) > div > div {
    padding: 4px;
  }
  
  
  .sr-bb .sr-cb-button__wrapper:after {
    content: "Adicionar ao bilhete";
    color: #fff !important;
    opacity: 1;
    text-align: center;
    position: static;
  }
  
  #sports_odds > div > div.sports_scroll_single_event > div > div.single_event_odds > div > div.bet_types_cols_holder > div > div > div > div > div > div.sr-bb.sr-cb-main-content.sr-ltr > div > div.sr-cb-main-content__wrapper.srt-neutral-13.srct-cb-container > div > div:nth-child(2) > div > div > div.sr-cb-market-view__wrapper.sr-bb.sr-cb-tabs--is-capitalized > div.sr-cb-market-view__bet-builder > div > div > div > div.sr-cb-betbuilder-animate__wrapper.srm-slide-up.srm-is-animating > div > div.sr-cb-betbuilder-animate__button > div > div > div {
    display: none;
  }
  
  #sports_odds > div > div.sports_scroll_single_event > div > div.single_event_odds > div > div.bet_types_cols_holder > div > div > div > div > div > div.sr-bb.sr-cb-main-content.sr-ltr > div > div.sr-cb-main-content__wrapper.srt-neutral-13.srct-cb-container > div > div:nth-child(1) > div > div.sr-cb-market-list__bet-builder > div > div > div > div.sr-cb-betbuilder-animate__wrapper.srm-slide-up.srm-is-animating.srm-is-top.srm-is-market > div > div.sr-cb-betbuilder-animate__button > div > div {
    font-size: 13px;
    text-align: center;
  }
  
  
  body #sports_slip {
    margin-top: 15px;
  }
  
  body .bs_title {
    background: var(--main_color)
  }
  
  body .bs_overlay.show_betslip, body .slip_contents, body .slip_stake_area, body .slip_stake_area .clear_bslip, #bslip_content .slip_selections_area:not(:empty) {
    background-color: var(--third_color) !important;
  }
  
  body #bslip_content .bslip_selection_tbl tr, body td.slip_sel_col_clear, #bslip_content .bslip_selection_tbl {
    background-color: transparent !important;
  }
  
  body #bslip_content .slip_tabs {
    display: none;
  }
  
  
  body #bslip_content .slip_sel_row.last_ev_row td {
    border-bottom: 1px solid var(--gray-3)
  }
  
  /* #bslip_content .bslip_selection_tbl td {
  padding-top: 4px;
  } */
  
  .slip_event_info_selector span {
    padding: 0px 10px 0px 10px
  }
  
  .no_selections_div {
    border-radius: 16px;
    border: 1px solid var(--main_red);
    background: var(--main_color)
  }
  
  body #bslip_content .close_btn {
    background-color: transparent !important;
    font-weight: bold;
  }
  #bslip_content .slip_selections_area:not(:empty) {
    background-color: var(--secondary_color) !important;
    margin: 16px;
    padding: 8px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px, rgba(0, 0, 0, 0.15) 0px 2px 6px 2px;
    border-radius: 8px;
    overflow-y: auto;
    max-height: 250px;
    height: auto;
  }
  
  #bslip_content .slip_selections_area .teams  {
    padding-top: 6px;
  }
  
  body #bslip_content .bslip_selection_tbl tr .selname {
    gap: 4px;
    align-items: flex-start;
  }
  body #bslip_content .bslip_selection_tbl tr .selname i {
  }
  
  .clear_bslip a {
    background-color: var(--main_color);
    border-radius: 8px;
    width: 20px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  }
  .clear_bslip a span {
    display: none;
  }
  
  .clear_bslip a:before {
    content: "\f1f8";
    color: #fff;
    font-family: "FontAwesome"
  }
  
  #bslip_content .bslip_selection_tbl tr.spacer {
    display: none;
  }
  
  body #bslip_info_area, body .slip_buttons_area {
    background: var(--main_color)
  }
  
  body #bslip_info_area {
    padding: 0px;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 8px 0px;
  }
  
  body #bslip_info_area table {
    border-spacing: 0px;
  }
  
  body #bslip_info_area table tbody {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 100%;
    padding: 8px 16px;
    align-items: center;
    gap: 8px;
  }
  
  body #bslip_info_area table tbody .odds_row,  body #bslip_info_area table tbody .bet_row{
    box-sizing: border-box;
    display: flex;
  }
  
  body #bslip_info_area table tbody .odds_row {
    width: 50%;
    margin-right: 4px;
  }
  
  body #bslip_info_area table tbody .bet_row {
    width: 46%;
    justify-content: flex-end;
    gap: 4px;
  }
  
  body #bslip_info_area table tbody .bet_row .sba_val input {
    width: 100% !important;
    background: var(--third_color) !important;
    color: #fff !important;
    border: 1px solid var(--bs_filters_bg)  !important;
  }
  
  body #bslip_info_area table tbody .bet_row .sba_val input::placeholder {
    color: #fff !important;
  }
  
  body #bslip_info_area table tbody .bonus_row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-right: 4px;
  }
  
  #bslip_info_area .sba_txt {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  body #bslip_info_area table tbody tr:nth-child(4) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  body #bslip_info_area table tbody tr:nth-child(4) td:nth-child(1) span {
    display: none;
  }
  
  body #bslip_info_area table tbody tr:nth-child(4) td:nth-child(1):before {
    content: "Ganhos potenciais";
    font-size: 14px;
    color: #fff;
  }
  
  
  body #bslip_info_area table tbody tr:nth-child(4) .sba_info {
    width: 130px;
  }
  
  body #bslip_info_area table tbody .odds_row .sba_val {
    width: 100px;
  
  }
  
  .odds_row .sba_val span {
    background: transparent;
    color: var(--selectOdd)
  }
  
  body .mm_win_dv .mm_win_val {
    border-radius: 8px;
    text-align: center;
    background: transparent;
  }
  
  .fa-remove:before, .fa-close:before, .fa-times:before {
    content: "\f1f8";
  }
  
  body.login .content_container {
    padding: 0px 0px 20px 0px;
    background: #151619;
  }
  
  body.login .page_sub_tt {
    padding: 20px 0px;
    border-image: var(--black_red_gradient) 1;
    border-bottom: 2px solid;
  }
  
  .login_page_container form {
    padding: 20px 10px;
  }
  
  .login_page_container form .login_page_row .input_fld input:nth-child(1),
  .login_page_container form .login_page_row .input_fld input:nth-child(2) {
    background: var(--gray-3) !important;
    border: 0px !important;
  }
  
  .login_option_switch.button{
    background: var(--red_gradient);
    clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
    color: var(--main_white);
    font-weight: bold;
    margin-top: 0px;
  }
  .login_page_row button.login_btn a:first-child {
    border-radius: 16px;
    margin-top: 0px;
  }
  .login_page_row button.login_btn a:last-child {
    color: #fff;
    border-radius: 36px;
    background: linear-gradient(180deg, #000000 0%, #B60707 100%);
    box-shadow: 0px 4px 15px 0px rgba(255, 0, 0, 0.22);
  }
  .login_page_row button.login_btn {
      background: var(--login_button_bg);
      color: #fff;
      font-weight: normal;
      box-shadow: 0px 4px 15px 0px rgba(255, 0, 0, 0.22);
      border-radius: 36px;
  }
   .login_page_row a:last-child::before {
      content: "entrar";
      width: 500px;
      height: 40px;
      border-radius: 36px;
      margin-bottom: 1px;
     
      }
  .login_option_switcher{
    padding: 0 35px;
  }
  
  .login_menu_area {
    top: 70px;
  }
  
  .login_area_header .right_sec {
    display: none;
  }
  
  .login_menu_area {
    top: 70px;
  }
  
  .login_area_header .right_sec {
    display: none;
  }
  
  .login_menu_area .login_area_header {
    display: flex;
    justify-content: center;
    background: var(--main_color);
    border: 0px;
  }
  
  .login_menu_area_v2 .balance_sec {
    background: var(--third_color);
  }
  
  .login_menu_area_v2 .header_sec_loggedin_menu_v2 {
    background: var(--main_color);
  }
  
  .login_menu_area .ttl_sec,
  .login_menu_area .profile_sec,
  .sec_menu a {
    background: transparent;
  }
  
  
  .login_menu_area_v2 .balance_btns_holder .balance_container,
  .login_menu_area_v2 .balance_btns_holder .open_slip_container {
    background: transparent;
    border: 0px;
  }
  
  .login_menu_area .ttl_sec {
    display: flex;
    align-items: center;
    height: 48px;
  }
  
  
  .login_menu_area .ttl_sec #text {
    font-size: 20px;
  }
  
  .login_menu_area a.logout_link {
    clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
    background: var(--red_gradient);
    font-weight: bold;
    border-radius: 0px;
    color: var(--main_white);
    width: 75%;
  }
  
  .main_menu {
    background: var(--primary_reverse_gradient);
    display: flex;
  }
  
  .main_menu ul li {
    border: 0px;
  }
  .left_menu_area_v2 .main_menu ul li a,
  .main_menu ul li a:hover,
  .main_menu ul li a:visited {
    margin-left: 0px;
  }
  
  .home_boxes_nav .hp_box a.all_sports, .home_boxes_nav .hp_box a.live_bet {
    background-color: var(--secondary_color);
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_event_section .spn_competitor .score span {
    color: #fff;
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_event_section .spn_competitor .competitor span {
    font-size: 15px;
  }
  
  .mob_header .deposit-cont {
    min-width: 65px;
    max-width: 100%;
    width: 100%;
    height: 100%;
    background: transparent !important;
    position: relative;
    right: 0px;
    align-items: flex-end;
  }
  .mob_header .deposit-cont .deposit_ico {
    mask-image: none;
    background-color: transparent;
    width: 100%;
    max-width: 100px;
  }
  
  .mob_header .deposit-cont .deposit_ico::before {
    content: "Depositar";
    font-size: 12px;
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0px 4px;
    top: 0px;
    color: #222323;
    background-color: var(--main_red);
    color: #fff;
    font-weight: bold;
    padding: 12px 6px;
    border-radius: 10px;
  }
  
  .ttl_sec:before {
    height: 32px;
    top: 0px;
  }
  
  
  div.panel_title_bar, td.panel_title_bar > div {
    background-color: var(--main_color)
  }
  
  .bs_search_form.full .bs_search_form_wrapper {
    background-color: var(--third_color)
  }
  
  .profile_tbl tr:nth-child(1) td:nth-child(2), .profile_tbl tr td:nth-child(2) {
    padding: 0px;
  }
  
  #fe_main:not(:has(.digitain_outer_wrapper)) select {
    width: 100%;
    background: var(--secondary_color);
    border-bottom: 0px !important;
  }
  
  #fe_main .profile_tbl input {
    background: var(--secondary_color) !important;
    border-bottom: 0px !important;
  }
  
  select option {
    color: #fff;
    background: var(--third_color)
  }
  
  .left_menu_area .main_menu {
    flex-direction: column;
  }
  
  .left_menu_area .main_menu #nav {
    height: 80px;
    background: var(--black_red_gradient);
  }
  
  .left_menu_area_v2 .main_menu #nav_2 ul li a {
    border-bottom: 1px solid var(--gray-3);
  }
  
  .left_menu_area_v2 .main_menu #nav_2 {
    height: 100%;
  }
  
  .left_menu_area_v2 .main_menu #nav_2 ul .offers_link,
  .left_menu_area_v2 .main_menu ul.nav_2_menu li.offers_link a {
    background: var(--bg-selected);
    color: var(
            --main_white);
  }
  .left_menu_area .main_menu .top_menu li {
    background: transparent;
  }
  
  .left_menu_area .main_menu .top_menu li a {
    border-right: 0px;
    background: transparent;
  }
  
  .left_menu_area_v2 .left_menu_area_inner {
    background: var(--primary_reverse_gradient);
  }
  
  .left_menu_area .main_menu .top_menu {
    background: var(--primary_gradient);
    height: 78px;
  }
  .top_menu a:before {
    margin-bottom: 8px;
  }
  
  .skin-120 .section_title_bar{
    background: var(--main_color);
  }
  
  
  #bs_contentarea .main_title_bar
  {
    background: var(--secondary_color)
  }
  
  .balance_page .ammount {
    color: #fff;
    margin-left: 8px;
  }
  
  .section_title_bar {
    background: var(--secondary_color)
  }
  
  .skin-120 .fields_container {
    background: var(--third_color)
  }
  
  .image-additional-input-container select, .image-additional-input-container textarea {
    background: var(--main_color) !important
  }
  
  .my_bets_container .status_container, .my_bets_container .date_container {
    padding: 0px;
    background: var(--main_color) !important
  }
  
  body .my_bets_container .touch_menu {
    background: var(--secondary_color);
    height: 64px;
    display: flex;
    justify-content: space-between
  }
  
  body .my_bets_container .touch_menu.date-style li div.selected, body .my_bets_container .touch_menu.date-style li div:hover {
    color: var(--main_red)
  }
  
  body .my_bets_container .bet_slips_container .betting_slip .betting_left, body .my_bets_container .bet_slips_container .betting_slip .betting_right {
    background: var(--third_color)
  }
  
  body .my_bets_container .bet_slips_container .betting_slip .betting_info {
    background: var(--main_color)
  }
  
  .betting_slip .betting_slip_section .half_right .res_ev_RUNNING {
    font-weight: bold;
    color: var(--selectOdd)
  }
  
  .sporticon {
    width: 24px;
    height: 20px;
  }
  
  .betting_slip .bet_amount {
    margin: 4px 0px 10px 0px;
  }
  
  .my_bets_container .touch_menu li {
    height: 100%;
  }
  
  .my_bets_container .touch_menu li div {
    display: flex;
    height: 100%;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    width: 75px;
  }
  
  .my_bets_container .touch_menu li div span {
    position: relative;
    top: 24px;
  }
  
  .my_bets_container .touch_menu li div:before {
    content: "";
    width: 100%;
    height: 3px;
    background: var(--gray-3);
  }
  
  .my_bets_container .touch_menu li div.selected {
    background: transparent !important;
    color: var(--main_red) !important
  }
  
  .my_bets_container .touch_menu li div.selected:before {
    content: "";
    width: 100%;
    height: 3px;
    background: var(--black_red_gradient);
  }
  
  body .single_ev_btc_wrapper.event_filter.show {
    height: 48px;
    gap: 12px;
    padding: px 8px !important;
    margin: 8px;
  }
  
  body .single_ev_btc_wrapper.event_filter.show #text {
    margin-top: 4px;
  }
  
  body #fe_main .slip_buttons_area button {
    font-size: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--red_gradient);
    border: 0px;
  }
  
  body #fe_main .slip_buttons_area button:before {
    content: "Finalizar aposta";
    font-size: 16px;
    color: #fff;
  
  }
  
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_odds_selectors .selection_box.selected {
    background-color: var(--selectOdd)
  }
  
  
  .title_tr.title_tr_bt, .title_tr.title_tr_sel, .ev_sel_odd.selected, .ev_sel_odd.selected:hover, .ev_sel_odd.selected:visited  {
    height: 100% !important;
    background: transparent !important;
  }
  
  
  .ev_sel_odd.selected a, .ev_sel_odd.selected:hover a, .ev_sel_odd.selected:visited a, .ev_sel_odd.selected a span {
    background: transparent;
  }
  
  .sportsbook_container .sportsbook_events {
    padding: 8px;
  }
  
  #sports_odds .sports_scroll_content, .odds_open {
    display: flex;
    width: 100%;
  }
  
  .odds_open, .sports_col.sportsbook_container .sports_scroll_content {
    flex-direction: column;
  }
  
  .odds_open.event_section {
    flex-direction: row;
  }
  
  
  body .slip_stake_area .clear_bslip {
    height: 100%;
    padding-bottom: 0px;
    display: flex;
    justify-content: end;
    padding: 0px 16px;
  }
  
  #bslip_content .slip_sel_row td.slip_sel_col_odd {
    padding: 0px;
  }
  
  body #bslip_content td.slip_sel_col_odd span.yellow #text {
    display: none;
  }
  
  
  .ev_sel_odd a, .ev_sel_odd a:hover, .ev_sel_odd a:visited {
    line-height: 12px !important;
  }
  
  #fe_main .sr-bb .sr-header.srt-primary-6 {
    background: var(--secondary_color);
    font-size: 12px;
  
  }
  
  .sr-bb .sr-lmt-plus__segment.srm-scoreboard, #fe_main .sr-bb .srt-base-1 {
    background: var(--main_color)
  }
  .sr-bb .sr-goalscorers .sr-ltr {
    background: none !important;
  }
  
  body.portable-device .event_container .single_event_odds .odds_open .bt_title, body.portable-device .odds_tbl_holder .bt_sub_title_holder {
  background: var(--third_color);
    border: 0px;
  }
  
  .single_event_close_area:before {
    left: 24px;
    top: -8px;
  }
  
  .single_event_holder .close_league {
    top: -13px;
  }
  
  
  #sports_menu_item_113 .cat_name span {
    display: none;
  }
  
  #sports_menu_item_113 .cat_name:before {
    content: "Odds Especiais";
    font-size: 10px;
    font-weight: bold;
    color: #fff;
  }
  
  /* #sports_menu_item_113 .cat_icon.sporticon.si_133 {
  mask-image: url()
  } */
  
  
  .sb_menu_sec_area.open {
    top: 70px;
  }
  
  #fe_main #sb_search_form input.sb_input {
    background: var(--main_color);
    padding: 24px 16px;
  }
  
  #fe_main .sb_menu_sec_area.open {
    background: var(--third_color)
  }
  
  .bet_types_col.bet_types_col_col1, .bet_types_col.bet_types_col_col2 {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 4px 6px;
  }
  
  .bet_types_col.bet_types_col_col1 .odds_open, .bet_types_col.bet_types_col_col2 .odds_open {
    border-radius: 16px;
  }
  
  
  #fe_header .message_center_new_messages_container {
    max-width: 35px;
    min-width: 25px;
  }
  
  .event_section .event_type_selections {
    display: grid;
  }
  
  .event_section .event_type_selections {
    display: grid;
  }
  
  .event_section .event_type_selections_3 {
    background: var(--cassino_bg);
    border-bottom: none;
    width: 100%;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4px;
  }
  
  #sports_odds .event_section .event_type_selections .ev_sel_odd_result {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--main_black);
    border-radius: 8px;
    margin: 2px;
    padding-right: 1px;
    width: 100%;
  }
  
  .odds_trs.event_type_selections.event_type_selections_3 .ev_sel_odd_result {
    width: 33.3%;
  }
  
  .odds_table.event_type_section.odds_tbl_cat3.odds_tbl_bt_1245 .under_over_selector_name {
    width: calc(20% - 2px) !important;
    height: 83px !important;
  }
  
  .odds_table.event_type_section.odds_tbl_cat3.odds_tbl_bt_1245 .ev_sel_odd_result {
    height: 49px;
  }
  
  .event_section .event_type_selections:last-child {
    /* border: none; */
    /* display: flex; */
  }
  
  .odds_table.event_type_section.odds_tbl_cat3.odds_tbl_bt_1245 .odds_trs.event_type_selections.event_type_selections_3 {
    border-bottom: 1px solid var(--main_black);
    display: grid;
    grid-template-columns: 64px 1fr 1fr;
    grid-template-rows: repeat(3, auto);
    gap: 4px;
  }
  
  .single_event_holder .single_event_info .sli_event .competitor1, .single_event_holder .single_event_info .sli_event .competitor2 {
    font-weight: bold;
    font-size: 16px;
  }
  
  .sr-cb-header__product-name.srt-text-secondary.srm-has-ellipsis {
    font-size: 0px;
  }
  
  .sr-cb-header__product-name.srt-text-secondary.srm-has-ellipsis::before {
    content: "Aposta Customizada";
    font-size: 12px;
  }
  
  
  .odds_table.event_type_section.bci_4.bci_161.btid_1 .event_type_title span {
    font-size: 0px;
  }
  
  .odds_table.event_type_section.bci_4.bci_161.btid_1 .event_type_title::before {
    content: "Resultado do Jogo";
    font-size: 14px;
  }
  
  .bslip_errors, .bslip_generic_warning, body .slip_contents .bs_slip_id {
    background: var(--secondary_color);
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0px, rgba(0, 0, 0, 0.15) 0px 2px 6px 2px;
  }
  
  body .slip_contents .bs_slip_id {
    font-size: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  body .slip_contents .bs_slip_id:before {
    content: "Aposta realizada com sucesso";
    font-size: 14px;
  
  }
  
  body .my_bets_container .touch_menu li div.selected, body .my_bets_container .touch_menu li div:hover {
    border: 0;
  }
  
  .my_bets_container .touch_menu li div{
    padding: 0px;
  }
  
  
  .betting_slip .event_competition {
    flex-wrap: nowrap;
  
  }
  
  .log_reg_sec a:first-child::before {content: "Entrar";margin-right: 4px;}
  .log_reg_sec a:last-child::before {
    content: "Cadastrar";
    background: var(--main_color);
    width: 500px;
    height: 40px;
    border-radius: 16px;
    margin-bottom: 1px;
  }
  .left_menu_area .main_menu .top_menu li {
    width: 25%;
  }
  .left_menu_area .main_menu .top_menu li a.selected {
    color: var(--accent1_color);
  }
  
  .sportsbook_filter .single_filter.main:first-child {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  
  .sportsbook_filter .single_filter:first-child {
    border-radius: 16px 16px 0px 0px;
  }
  #sports_menu {
    padding: 16px;
  }
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_odds_selectors .selection_box .selector {
    /* margin-right: 20px; */
    margin-bottom: 0;
  }
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_odds_selectors .selection_box a {
    display: flex;
    flex-direction: row;
  }
  .sportsbook_container .sportsbook_events .spn_odds_section .spn_event_section .spn_event_details span {
    font-size: 11px;
    /* display: flex; */
  }
  
  .login_page_container form { 
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .login_option_switcher  {
    display: flex;
    flex-flow: row nowrap !important;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 8px;
    padding: 0px;
    
    order: -1;
    }
  
  #fe_login_box_popup .logo_area {
    display: flex;
    order: -1;
  }
  
  .login_option_switch_text {
    position: absolute;
  }
  
  .login_option_switch.button {
    clip-path: none;
    border-radius: 4px;
  }
  
  .login_page_container form .login_page_row:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
  }
  
  .login_option_switch_text {
    position: absolute;
    bottom: 159px;
    display: none !important;
  }
  .input_fld {
    padding: 0px;
  }
  
  .login_page_container .login_page_row.login_page_row_btn {
    margin-top: 0px;
  }
  #launcher {
  bottom: 112px !important;
  z-index: 999995 !important;
  }
  .sportsbook_navigation .navigation_block img, .casino_navigation .navigation_block img {
    margin: 0px auto;
    width: 16px;
    height: 16px;
  }
  .fw_body {
    padding: 10px;
    background: var(--main_color);
  }
  .fw_body .fw_bet_section .selection_box a {
    background-color: var(--secondary_color);
    color: var(--primary_txt_color);
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  
  .selection_box.selected a {
    background: green;
  }
  
  .fw_header .fw_header_info {
    padding: 6px 14px;
    font-size: 12px;
    width: 70%;
    height: 42px;
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: space-between;
  }
  .fw_header .fw_header_info {
    background-position-x: 10px;
  }
  
  .fw_header .fw_header_info.date {
    width: 30%;
    background-image: none;
  }
  .fw_header .fw_header_info span {
      vertical-align: middle;
  }
  
  .fw_header {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      background: var(--main_black);
  }
  #sports_odds .event_section .event_type_selections .under_over_selector_name {
    font-weight: bold;
    height: 40px !important;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: var(--cassino_bg)!important; */
    grid-row: span 3;
    position: relative;
    /* left: 40%; */
    border-radius: 8px;
  }
  body.login {
    position: relative;
    padding-top: 190px;
  }
  
  body.login::before {
    content: "";
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 200px;
    background: url('/uploads/files/banner5k-png-6658b207b3aab.png') no-repeat center center;
    background-size: cover;
    z-index: 1;
  }
  
  
  @media (max-width: 768px) {
    body.login {
      padding-top: 150px;
    }
  
    body.login::before {
      top: 50px; 
      height: 150px; 
      background-size: contain; 
    }
  }
  
  @media (max-width: 480px) {
    body.login {
      padding-top: 160px; 
    }
  
    body.login::before {
      top: 65px;
      height: 180px;
      background-size: contain;
    }
  }
  
  
  .sportsbook_widget {padding: 0px 5%; width: 92%;}
  
  .fw_header .fw_header_info:first-child:before {
    content: "";
    display: flex;
    background: url("/uploads/files/akar-icons-thunder-png-6656142d2eadd.png");
    background-repeat: no-repeat;
    background-position: center;
    width: 32px;
    height: 32px;
  }
  
  
  .fw_header .fw_header_info, .fw_header .fw_header_info.date 
  {
    background: var(--main_black)
  }
  
  .sportsbook_widget .swiper-button-prev, .sportsbook_widget .swiper-button-next {
    width: 6%;
    background: var(--black_very_light_transparent_bg);
    display: none;
  }
  
  #fe_main .swiper-button-next:after, #fe_main .swiper-button-prev:after {
    font-size: 14px;
    background: transparent;
  }
  
  
  .sportsbook_navigation .navigation_block.invictus_round a, .casino_navigation .navigation_block.invictus_round a {
    border-radius: 16px;
    gap: 2px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    background: var(--main_black);
    height: 100%;
    justify-content: center;
  }
  
  .sportsbook_navigation .navigation_block, .casino_navigation .navigation_block {
    display: flex;
    flex-direction: column;
    padding: 0px;
    height: 61px !important;
    justify-content: center;
    width: 15.9%;
  }
  
  .casino_navigation .navigation_block  {
    width: 19%;
  }
  
  .sportsbook_navigation .navigation_block a span, .casino_navigation .navigation_block a span{
    font-size: 10px;
  }
  
  .sportsbook_navigation .navigation_block.invictus_round, .casino_navigation .navigation_block.invictus_round {
    background: var(--button-gradient);
    border: 0;
    padding: 1px;
    box-shadow: 0px 4px 15px 0px rgba(255, 0, 0, 0.22);
    border-radius: 16px;
  }
  
  .fw_body .fw_bet_section .selection_box.selected a {
    background: var(--selectOdd);
  }
  
  .sportsbook_navigation .betstlip_full {
    border-radius: 99%;
    padding: 4px 10px;
    top: -57px;
  }
  
  .sportsbook_navigation .betstlip_full img {
    width: 24px
  }
  .sportsbook_navigation .betstlip_full .betslip_name {
    font-size: 0px
  }
  
  .sportsbook_navigation .betstlip_full .betslip_name:before {
    content: "Bilhete";
    font-size: 12px
  }
  
  .navigation_bottom .sportsbook_navigation, .casino_navigation {
    border-radius: 16px 16px 0px 0px;
    padding: 5px 4px;
    box-shadow: rgb(255 0 0 / 30%) 0px 0px 4px 1px;
    display: flex;
    justify-content: center;
  }
  
  .casino_navigation {
    justify-content: space-around;
  }
  
  .fw_body .fw_bet_section {
    margin-top: 0px;
  }
  
  
  .prematch_container .event_section .odds_tbl_cat3.odds_tbl_bt_273 .odds_trs .under_over_selector_name .selector_name, .prematch_container .event_section .odds_tbl_cat3.odds_tbl_bt_1245 .odds_trs .under_over_selector_name .selector_name {
    margin-top: 0px;
  }
  
  .odds_table.event_type_section.bci_4.bci_161.btid_1.event_section .event_type_selections {
    grid-template-rows: 1fr 1fr 1fr;
  }
  
  .odds_open .odds_table.odds_tbl_bt_138 .event_type_selections_3, .odds_open .odds_table.odds_tbl_bt_690 .event_type_selections_3, .odds_open .odds_table.odds_tbl_bt_82 .event_type_selections_3 {
    grid-template-columns: 64px 3fr;
  }
  
  .bet_types_col.bet_types_col_col1 .odds_open .odds_table .odds_trs.event_type_selections_2 {
    grid-template-columns: 1fr 1fr;
    gap: 4px
  }
  
  .odds_open .odds_table.odds_tbl_bt_273 .event_type_selections_3 {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  .odds_open .odds_table.bci_35 .event_type_selections_3 {
    grid-template-columns: 1fr 
  }
  
  
  .odds_open .odds_table.bci_7.bci_35.bci_106.btid_131, .odds_open .odds_table.bci_99.btid_2512 {
    display: grid;
    gap: 8px;
  }
  
  .odds_open .odds_table.odds_tbl_bt_185 .event_type_selections_3, .odds_open .odds_table.odds_tbl_bt_167 .event_type_selections_3, .odds_open .odds_table.odds_tbl_bt_245 .event_type_selections_3, .odds_open .odds_table.odds_tbl_bt_108 .event_type_selections_3, .odds_open .odds_table.odds_tbl_bt_106 .event_type_selections_3, .odds_open .odds_table.odds_tbl_bt_882 .event_type_selections_3, .odds_open .odds_table.odds_tbl_bt_273 .event_type_selections_3, .odds_open .odds_table.odds_tbl_bt_58 .event_type_selections_3, .odds_open .odds_table.odds_tbl_bt_1720 .event_type_selections_3, .odds_open .odds_table.odds_tbl_bt_581 .event_type_selections_3, .odds_open .odds_table.odds_tbl_bt_562 .event_type_selections_3, .odds_open .odds_table.odds_tbl_bt_93 .event_type_selections_3 {
    grid-template-columns: 64px 1fr 1fr;
  }
  
  
  
  .odds_open .odds_table.bci_99.btid_2512 .event_type_selections_3 {
     grid-template-columns: 1fr;
  }
  
  .odds_open .odds_table.odds_tbl_bt_1245 .event_type_selections_3 .under_over_selector_name {
    left: 40%;
  }
  
  .odds_open .odds_table.odds_tbl_bt_138 .event_type_selections_3, .odds_open .odds_table.odds_tbl_bt_690 .event_type_selections_3, .odds_open .odds_table.odds_tbl_bt_82 .event_type_selections_3, {
    grid-template-columns: 64px 1fr 1fr 1fr;
  }
  
  .odds_open .odds_table.bci_35.bci_106.bci_140.btid_140, .odds_open .odds_table.bci_35.btid_2478, .odds_table.bci_11.bci_35.bci_106.btid_92, .odds_table.bci_11.bci_35.bci_106.btid_173, .odds_table.bci_35.btid_2479 {
    display: grid;
    gap: 8px;
  }
  
  .odds_open .odds_table.bci_36.bci_35.bci_106.bci_7.bci_11.btid_152 {
    display: grid;
    gap: 4px;
  }
  
  .odds_open .odds_table.bci_35.bci_106.bci_140.btid_140 .event_type_selections_3, .odds_open .odds_table.bci_7.bci_35.bci_106.bci_140.btid_80 .event_type_selections_3, .odds_open  {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  .odds_open .odds_table.bcid_27.bcid_36.btid_107 .event_type_selections_2, .odds_open .odds_table.bcid_27.bcid_36.btid_110 .event_type_selections_2, .odds_open .odds_table.bcid_28.bcid_36.btid_160 .event_type_selections_2, .odds_open .odds_table.bcid_36.btid_702 .event_type_selections_2, .odds_open .odds_table.bcid_36.btid_155 .event_type_selections_2, .odds_open .odds_table.bcid_28.btid_163 .event_type_selections_2, .odds_open .odds_table.bcid_68.btid_147 .event_type_selections_2 {
    grid-template-columns: 1fr 1fr;
    gap: 4px;
  }
  
  
  .registration_tbl span.reg_ttl2 {
    font-size: 0px;
  }
  
  .registration_tbl span.reg_ttl2:before {
    content: "Seja bem-vindo a  Invictosbet, \A sua casa de apostas com as melhores odds e o cassino mais completo do Brasil! \A \A Viva o lado Invictosbet!";
    font-size: 16px;
    white-space: pre-wrap;
  }
  
  body.portable-device.skin-120#reg_user_form .registration_tbl, .skin-120 .registration_tbl {
    border-color: gray;
    padding: 0px;
  }
  
  
  .reg_v10 .reg_steps_container .reg_steps {
    background: var(--third_color);
  }
  
  
  #fe_main button.reg_btn {
    background: var(--button-gradient) !important;
    box-shadow: 0px 4px 40px 0px rgba(255, 0, 0, 0.22);
    border-radius: 8px
  }
  
  #fe_main button.reg_btn:before {
    content: "Continuar";
    background: var(--secondary_color);
    position: absolute;
    display: flex;
    justify-content: center;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    left: 1px;
    top: 1px;
    align-items: center;
    border-radius: 8px;
    z-index: 0;
  }
  
  #fe_main .registration_container p.password_tooltip {
    display: none;
  }
  
  .event_section .odds_tbl_cat5 .bt_name_dyn_header, .event_section .odds_tbl_cat5 .event_type_selections > .bts_name_dyn {
    background: transparent;
    padding: 4px 0px
  }
  
  .odds_open .odds_table.odds_tbl_bt_1160 {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  
  .odds_open .odds_table.odds_tbl_bt_1160 .bts_name_dyn {
    grid-column: 1 / span 3;
  }
  
  .odds_open .odds_table.odds_tbl_bt_1160 .event_type_selections_3 {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  .odds_open .odds_table.odds_tbl_bt_1160 .event_type_selections_3 .selection_box.ev_sel_odd {
    width: 100%;
    background: var(--main_color);
  }
  
  .odds_open .odds_table.odds_tbl_bt_1160 .event_type_selections_3 .selection_box.ev_sel_odd a {
    padding: 4px !important;
    background: transparent;
  }
  
  .odds_open .odds_table.odds_tbl_bt_1160 .event_type_selections_3 .selection_box.ev_sel_odd {
    background: var(--main_black) !important;
    border-radius: 8px;
  }
  
  .odds_open .odds_table.odds_tbl_bt_1160 .event_type_selections_3 .selection_box.ev_sel_odd .odd, .odds_open .odds_table.odds_tbl_bt_1160 .event_type_selections_3 .selection_box.ev_sel_odd .selector {
    background: var(--main_black) !important;
  }
  
  #sports_odds .event_section .event_type_selections div a .selector_name,
  #sports_odds .event_section .odds_tbl_cat5 .event_type_selections .selection_box a .selector {
    font-size: 10px;
    color: white;
  }
  
  #sports_odds .event_section .event_type_selections div.bts_name_dyn {
    background: var(--main_color);
    border-radius: 4px;
  }
  
  #sports_odds .event_section .event_type_selections div.bts_name_dyn span {
    padding: 0px 8px;
  }
  
  body #fe_main .slip_buttons_area button, body #fe_main .slip_buttons_area a.place_bet_btn {
    background: var(--red_gradient);
    border: 0px;
    width: 100%;
  }
  
  .paym_field table tbody tr:nth-child(1) {
      display: flex !important;
      width: 100%;
    }
  
  .paym_field table tbody tr:nth-child(1) td .title, .paym_field table tbody tr nth-child(1) td div input {
    width: 100%;
  }
  
  .deposit-lobby-page .paym_field_cont table tr td .title, .deposit-lobby-page .paym_field_cont table tr td {
    width: 100%
  }
  
  .odds_open.bt_id_908 .event_type_selections, .odds_open.bt_id_572 .event_type_selections {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4px
  }
  
  .odds_open.bt_id_1530 .event_type_selections, .odds_open.bt_id_827 .event_type_selections, .odds_open.bt_id_1061 .event_type_selections, .odds_open.bt_id_1062 .event_type_selections, .odds_open.bt_id_826 .event_type_selections, .odds_open.bt_id_2050 .event_type_selections, .odds_open.bt_id_2045 .event_type_selections, .odds_open.bt_id_2048 .event_type_selections, .odds_open.bt_id_2018 .event_type_selections, .odds_open.bt_id_2017 .event_type_selections, .odds_open.bt_id_2049 .event_type_selections, .odds_open.bt_id_2016 .event_type_selections, .odds_open.bt_id_2010 .event_type_selections, .odds_open.bt_id_2044 .event_type_selections, .odds_open.bt_id_2031 .event_type_selections, .odds_open.bt_id_2053 .event_type_selections, .odds_open.bt_id_2047 .event_type_selections, .odds_open.bt_id_2056 .event_type_selections, .odds_open.bt_id_2046 .event_type_selections, .odds_open.bt_id_2055 .event_type_selections, .odds_open.bt_id_2030 .event_type_selections, .odds_open.bt_id_1785 .event_type_selections, .odds_open.bt_id_574 .event_type_selections{
    grid-template-columns:  .5fr 1fr 1fr;
    gap: 4px
  }
  
  .odds_open.bt_id_896 .event_type_selections, .odds_open.bt_id_915 .event_type_selections, .odds_open.bt_id_634 .event_type_selections, .odds_open.bt_id_1788 .event_type_selections, .odds_open.bt_id_2028 .event_type_selections, .odds_open.bt_id_2029 .event_type_selections, .odds_open.bt_id_1784 .event_type_selections, .odds_open.bt_id_2036 .event_type_selections, .odds_open.bt_id_2027 .event_type_selections, .odds_open.bt_id_2037 .event_type_selections{
    grid-template-columns:  .5fr 1fr 1fr 1fr;
    gap: 4px
  }
  
  .odds_open.bt_id_2084 .bt_title.min {
    padding: 8px;
  }
  
  .odds_open.bt_id_2084 .event_type_selections {
    grid-template-columns: 2fr 1fr;
  }
  
  .odds_open.bt_id_2084 .odds_tbl_holder .odds_trs .ev_sel_odd_result a, .odds_open.bt_id_2086 .odds_tbl_holder .odds_trs .ev_sel_odd_result a{
    justify-content: center !important;
  }
  .odds_open .odds_tbl_holder .odds_trs {
    background-color: var(--third_color);
    padding: 4px 8px
  }
  
  .odds_open.bt_id_2084 {
    margin: 4px
  }
   
  .odds_open.bt_id_590 .event_type_selections, .odds_open.bt_id_150 .event_type_selections, .odds_open.bt_id_589 .event_type_selections, .odds_open.bt_id_598 .event_type_selections, .odds_open.bt_id_2118 .event_type_selections, .odds_open.bt_id_2117 .event_type_selections, .odds_open.bt_id_596 .event_type_selections {
    grid-template-columns: 1fr 1fr;
    gap: 4px;
  }
  
  .odds_open.bt_id_2086 .event_type_selections {
    grid-template-columns: 2fr 1fr;
    gap: 4px;
  }
  
  .odds_open.bt_id_593 .event_type_selections, .odds_open.bt_id_592 .event_type_selections {
   grid-template-columns: 1fr 1fr;
    gap: 4px;
  }
  
  
  #cboxContent #bs_contentarea {
    width: 100%;
    background: var(--button-gradient);
    border-radius: 16px;
    padding: 1px;
    box-shadow: 0px 4px 15px 0px rgba(255, 0, 0, 0.22);
  }
  
  .message_content_tbl .header, .message_content_tbl .date {
    display: none;
  }
  
  .message_content_tbl tbody tr {
    height: auto !important;
  }
  
  .message_content_tbl tbody tr td {
    padding-bottom: 0px !important;
    margin: 0px 12px;
  }
  .message_content_tbl tbody tr:nth-child(1) td {
    font-size: 16px;
    font-weight: bold;
  }
  
  .message_content_tbl tbody tr:nth-child(2) td {
    font-size: 10px;
    color: #a1a1aa
  } 
  
  .message_content_tbl tbody tr:nth-child(3) td:nth-child(1) {
    display: none;
  }
  
  td.content.full {
    padding: 0px;
     background: var(--third_color);
  
  }
  
  .inbox-message-center .read_message_page .section_title_bar {
    border-radius: 16px 16px 0px 0px;
    background: var(--third_color);
  }
  
   .read_message_page .bs_data_wrapper.bs_filters {
    border-radius: 0px 0px 16px 16px;
       background: var(--third_color);
  
  }
  
  .section_title_bar .messages_icon {
    font-size: 14px;
  }
  
  body#fe_body.inbox-message-center #cboxClose {
    border: 0px !important;
  }
  
  .registration_tbl tr:nth-child(2) {
    padding: 0px;
  }
  
  .registration_tbl tr:nth-child(5), .registration_tbl tr:nth-child(6) {
    display: none;
  }
  
  .registration_tbl tr {
    display: flex;
    flex-direction: column;
  }
  
  .registration_tbl td.reg_field_name {
    padding: 0px;
  }
  
  .registration_tbl td {
    padding: 0px;
  }
  #verify-cpf {
    height: 100%;
    padding: 2px 15px;
    border-radius: 8px !important
  }
  
  .cpf-input {
    height: 44px !important;
    line-height: 44px;
    background: var(--input_select_bg) !important;
  }
  
  .cpf-input::placeholder {
    color: #c9c9c9 !important;
  }
  
  .usr_nm.keep-in-line {
      background: var(--input_select_bg) !important;
    border-radius: 8px !important;
    
  }
  
  div.usr_nm.keep-in-line:before {
    height: 36px
  }
  
  #fe_main:not(:has(.digitain_outer_wrapper)) .reg_v11 input:not([type="radio"]):not([type="checkbox"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="file"]) {
    border-radius: 8px;
  }
  
  .registration_tbl table {
    padding: 12px
  }
  
  .registration_tbl .chk_bx {
    padding-left: 8px;
  }
  
  .chk_bx_cnt input:checked ~ .checkmark2 {
    background: var(--main_color);
    border: 1px solid var(--main_dark_red);
    border-radius: 4px;
  }`;

  console.log("YorzaN");

  const styleElement = document.createElement("style");
  styleElement.innerHTML = cssCode;
  document.head.appendChild(styleElement);
});
