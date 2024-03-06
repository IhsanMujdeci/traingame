import querystring from "node:querystring"

describe('quert string', ()=>{
    it('test the boy', ()=>{
        const str = 'atts%5Blist%5D=lease&atts%5Bmultilist%5D=&atts%5Blayout%5D=&atts%5Btemplate%5D=Shortcode.SearchResults.SearchResults&atts%5Bselector_listings%5D=ap-listing-search-results&atts%5Bajax_template%5D=Ajax.SearchResults&atts%5Bload_more%5D=true&atts%5Bhide_search_form%5D=0&atts%5Brow_col_class%5D=row+row-cols-xl-3+row-cols-lg-2+row-cols-1&atts%5Bper_page%5D=16&atts%5Bsur_suburbs%5D=0&atts%5Bcenter_latlng%5D=&atts%5Bsur_suburbs_radius%5D=10&atts%5Bmax_page%5D=false&atts%5Bmap_zoom%5D=11&atts%5Bmap%5D=map_canvas&atts%5Bmap_load_all_marker%5D=0&atts%5Bmap_callback%5D=ap_realty.searchResultsMapCallback&atts%5Bmap_attribute_cluster%5D=0&atts%5Bmap_is_visible%5D=1&atts%5Bproperty_type_column%5D=1%2C2%2C3&atts%5Bcontent_first%5D=0&atts%5Bauth%5D=0&atts%5Bauth_type%5D=content&atts%5Bauth_message%5D=Sorry%2C+You+Are+Not+Allowed+to+Access+This+Page&atts%5Binclude_private_listing%5D=0&atts%5Bmap_attribute_loadCallback%5D=ap_realty.searchResultsMapCallback&atts%5Boffices%5D%5B0%5D%5Bid%5D=19214&atts%5Boffices%5D%5B0%5D%5Bname%5D=Morton+-+Crows+Nest&atts%5Boffices%5D%5B1%5D%5Bid%5D=19215&atts%5Boffices%5D%5B1%5D%5Bname%5D=Morton+-+Pyrmont&atts%5Boffices%5D%5B2%5D%5Bid%5D=19216&atts%5Boffices%5D%5B2%5D%5Bname%5D=Morton+-+Woolloomooloo&atts%5Boffices%5D%5B3%5D%5Bid%5D=19217&atts%5Boffices%5D%5B3%5D%5Bname%5D=Morton+-+Green+Square&atts%5Boffices%5D%5B4%5D%5Bid%5D=19218&atts%5Boffices%5D%5B4%5D%5Bname%5D=Morton+-+Sydney&atts%5Boffices%5D%5B5%5D%5Bid%5D=19219&atts%5Boffices%5D%5B5%5D%5Bname%5D=Morton+-+Newington&atts%5Boffices%5D%5B6%5D%5Bid%5D=19220&atts%5Boffices%5D%5B6%5D%5Bname%5D=Morton+-+Penrith&atts%5Boffices%5D%5B7%5D%5Bid%5D=19221&atts%5Boffices%5D%5B7%5D%5Bname%5D=Morton+-+Riverwood&atts%5Bload_more_automatic%5D=true&atts%5Bkeywords%5D=&atts%5Bbedrooms%5D=&atts%5Bbathrooms%5D=&atts%5Bcarspaces%5D=&atts%5Bmin_price%5D=&atts%5Bmax_price%5D=&atts%5Boffice_id%5D=&atts%5Bsort%5D=latest&per_page=16&load_more=true&selectorMap=%23map_canvas&selector=%23ap-listing-search-results&current_page=2&sort=latest&action=property_search_results'
        console.log(querystring.decode(str))
    })
})

/**
 * https://www.morton.com.au/wp-admin/admin-ajax.php
 * formData
 * action: agent_search_results
 */