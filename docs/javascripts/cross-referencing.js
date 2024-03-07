// Get all of the <ref>#reference-id</ref> page elements.
var refs = document.getElementsByTagName('ref');
var i;

// For each element, replace the contained #reference-id with the
// corresponding figure/table/listing label.
for (i = 0; i < refs.length; ++i) {
    var ref_name = refs[i].innerText;

    // Fetch the caption element corresponding to the referenced name.
    // This element's DOM location differs depending on if it is an image,
    // listing, or table caption.
    // 'fig' => figure/image caption
    // 'tab' => table caption
    // 'lis' => listing caption
    // other => invalid
    var ref_type = ref_name.slice(1,4);

    if( ref_type == 'fig' ) {
        // Fetch the figure label from the referenced ID.
        var ref_label = document.querySelector(ref_name)
                .parentElement // glightbox parent element
                .parentElement // caption parent element of glightbox element
                .querySelector('.image-caption') // get the image caption element
                .children[0] // Get the first element inside the image caption, which is a span.
                .innerText.replace(/:\s*/g, ""); // Strip off the colon.

        // Re-write the reference tag content with the figure label.
        refs[i].innerText = ref_label;
    }
    else if( ref_type == 'tab' ) {
        // Fetch the figure label from the referenced ID.
        var ref_label = document.querySelector(ref_name) // The ID refers to the whole table tag here.
                .querySelector('.table-caption') // The inner <caption> tag
                .children[0] // The span containing the label
                .innerText.replace(/:\s*/g, ""); // Strip off the colon.
        //
        // Re-write the reference tag content with the table label.
        refs[i].innerText = ref_label;
    }
    else if( ref_type == 'lis' ) {
        // Fetch the figure label from the referenced ID.
        var ref_label = document.querySelector(ref_name) // The ID refers to the whole listing div here.
                .getElementsByTagName('span')[0] // The caption label is in a child span.
                .innerText.replace(/:\s*/g, ""); // Strip off the colon.
        //
        // Re-write the reference tag content with the listing label.
        refs[i].innerText = ref_label;
    }
    else {
        // Invalid reference type. Skip it.
        console.log("Invalid reference type")

        // Re-write the reference tag content an invalid flag label.
        refs[i].innerText += "???";
        continue;
    }

}
