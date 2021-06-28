window.dataLayer = window.dataLayer || []; 
function gtag(){
    dataLayer.push(arguments);
} 
gtag('js', new Date()); gtag('config', 'AW-668732255');

function gtag_report_conversion(url){ 
    var callback = function () { 
        if (typeof(url) != 'undefined'){ 
            window.location = url; 
        } 
    };
    gtag('event', 'conversion', 
        { 
            'send_to': 'AW-668732255/Px9VCOmLw9ABEN-W8L4C', 
            'event_callback': callback 
        }); 
    return false; 
}