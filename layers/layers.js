var wms_layers = [];

var lyr_backgroundlandscape_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'backgroundlandscape<br />\
    <img src="styles/legend/backgroundlandscape_0_0.png" /> 0<br />\
    <img src="styles/legend/backgroundlandscape_0_1.png" /> 1<br />\
    <img src="styles/legend/backgroundlandscape_0_2.png" /> 2<br />\
    <img src="styles/legend/backgroundlandscape_0_3.png" /> 3<br />\
    <img src="styles/legend/backgroundlandscape_0_4.png" /> 4<br />\
    <img src="styles/legend/backgroundlandscape_0_5.png" /> 5<br />\
    <img src="styles/legend/backgroundlandscape_0_6.png" /> 6<br />\
    <img src="styles/legend/backgroundlandscape_0_7.png" /> 7<br />\
    <img src="styles/legend/backgroundlandscape_0_8.png" /> 8<br />\
    <img src="styles/legend/backgroundlandscape_0_9.png" /> 9<br />\
    <img src="styles/legend/backgroundlandscape_0_10.png" /> 10<br />\
    <img src="styles/legend/backgroundlandscape_0_11.png" /> 11<br />\
    <img src="styles/legend/backgroundlandscape_0_12.png" /> 12<br />\
    <img src="styles/legend/backgroundlandscape_0_13.png" /> 13<br />\
    <img src="styles/legend/backgroundlandscape_0_14.png" /> 14<br />\
    <img src="styles/legend/backgroundlandscape_0_15.png" /> 15<br />\
    <img src="styles/legend/backgroundlandscape_0_16.png" /> 16<br />\
    <img src="styles/legend/backgroundlandscape_0_17.png" /> 17<br />\
    <img src="styles/legend/backgroundlandscape_0_18.png" /> 18<br />\
    <img src="styles/legend/backgroundlandscape_0_19.png" /> 19<br />\
    <img src="styles/legend/backgroundlandscape_0_20.png" /> 20<br />\
    <img src="styles/legend/backgroundlandscape_0_21.png" /> 21<br />\
    <img src="styles/legend/backgroundlandscape_0_22.png" /> 22<br />\
    <img src="styles/legend/backgroundlandscape_0_23.png" /> 23<br />\
    <img src="styles/legend/backgroundlandscape_0_24.png" /> 24<br />\
    <img src="styles/legend/backgroundlandscape_0_25.png" /> 25<br />\
    <img src="styles/legend/backgroundlandscape_0_26.png" /> 26<br />\
    <img src="styles/legend/backgroundlandscape_0_27.png" /> 27<br />\
    <img src="styles/legend/backgroundlandscape_0_28.png" /> 28<br />\
    <img src="styles/legend/backgroundlandscape_0_29.png" /> 29<br />\
    <img src="styles/legend/backgroundlandscape_0_30.png" /> 30<br />\
    <img src="styles/legend/backgroundlandscape_0_31.png" /> 31<br />\
    <img src="styles/legend/backgroundlandscape_0_32.png" /> 32<br />\
    <img src="styles/legend/backgroundlandscape_0_33.png" /> 33<br />\
    <img src="styles/legend/backgroundlandscape_0_34.png" /> 34<br />\
    <img src="styles/legend/backgroundlandscape_0_35.png" /> 35<br />\
    <img src="styles/legend/backgroundlandscape_0_36.png" /> 36<br />\
    <img src="styles/legend/backgroundlandscape_0_37.png" /> 37<br />\
    <img src="styles/legend/backgroundlandscape_0_38.png" /> 38<br />\
    <img src="styles/legend/backgroundlandscape_0_39.png" /> 39<br />\
    <img src="styles/legend/backgroundlandscape_0_40.png" /> 40<br />\
    <img src="styles/legend/backgroundlandscape_0_41.png" /> 41<br />\
    <img src="styles/legend/backgroundlandscape_0_42.png" /> 42<br />\
    <img src="styles/legend/backgroundlandscape_0_43.png" /> 43<br />\
    <img src="styles/legend/backgroundlandscape_0_44.png" /> 44<br />\
    <img src="styles/legend/backgroundlandscape_0_45.png" /> 45<br />\
    <img src="styles/legend/backgroundlandscape_0_46.png" /> 46<br />\
    <img src="styles/legend/backgroundlandscape_0_47.png" /> 47<br />\
    <img src="styles/legend/backgroundlandscape_0_48.png" /> 48<br />\
    <img src="styles/legend/backgroundlandscape_0_49.png" /> 49<br />\
    <img src="styles/legend/backgroundlandscape_0_50.png" /> 50<br />\
    <img src="styles/legend/backgroundlandscape_0_51.png" /> 51<br />\
    <img src="styles/legend/backgroundlandscape_0_52.png" /> 52<br />\
    <img src="styles/legend/backgroundlandscape_0_53.png" /> 53<br />\
    <img src="styles/legend/backgroundlandscape_0_54.png" /> 54<br />\
    <img src="styles/legend/backgroundlandscape_0_55.png" /> 55<br />\
    <img src="styles/legend/backgroundlandscape_0_56.png" /> 56<br />\
    <img src="styles/legend/backgroundlandscape_0_57.png" /> 57<br />\
    <img src="styles/legend/backgroundlandscape_0_58.png" /> 58<br />\
    <img src="styles/legend/backgroundlandscape_0_59.png" /> 59<br />\
    <img src="styles/legend/backgroundlandscape_0_60.png" /> 60<br />\
    <img src="styles/legend/backgroundlandscape_0_61.png" /> 61<br />\
    <img src="styles/legend/backgroundlandscape_0_62.png" /> 62<br />\
    <img src="styles/legend/backgroundlandscape_0_63.png" /> 63<br />\
    <img src="styles/legend/backgroundlandscape_0_64.png" /> 64<br />\
    <img src="styles/legend/backgroundlandscape_0_65.png" /> 65<br />\
    <img src="styles/legend/backgroundlandscape_0_66.png" /> 66<br />\
    <img src="styles/legend/backgroundlandscape_0_67.png" /> 67<br />\
    <img src="styles/legend/backgroundlandscape_0_68.png" /> 68<br />\
    <img src="styles/legend/backgroundlandscape_0_69.png" /> 69<br />\
    <img src="styles/legend/backgroundlandscape_0_70.png" /> 70<br />\
    <img src="styles/legend/backgroundlandscape_0_71.png" /> 71<br />\
    <img src="styles/legend/backgroundlandscape_0_72.png" /> 72<br />\
    <img src="styles/legend/backgroundlandscape_0_73.png" /> 73<br />\
    <img src="styles/legend/backgroundlandscape_0_74.png" /> 74<br />\
    <img src="styles/legend/backgroundlandscape_0_75.png" /> 75<br />\
    <img src="styles/legend/backgroundlandscape_0_76.png" /> 76<br />\
    <img src="styles/legend/backgroundlandscape_0_77.png" /> 77<br />\
    <img src="styles/legend/backgroundlandscape_0_78.png" /> 78<br />\
    <img src="styles/legend/backgroundlandscape_0_79.png" /> 79<br />\
    <img src="styles/legend/backgroundlandscape_0_80.png" /> 80<br />\
    <img src="styles/legend/backgroundlandscape_0_81.png" /> 81<br />\
    <img src="styles/legend/backgroundlandscape_0_82.png" /> 82<br />\
    <img src="styles/legend/backgroundlandscape_0_83.png" /> 83<br />\
    <img src="styles/legend/backgroundlandscape_0_84.png" /> 84<br />\
    <img src="styles/legend/backgroundlandscape_0_85.png" /> 85<br />\
    <img src="styles/legend/backgroundlandscape_0_86.png" /> 86<br />\
    <img src="styles/legend/backgroundlandscape_0_87.png" /> 87<br />\
    <img src="styles/legend/backgroundlandscape_0_88.png" /> 88<br />\
    <img src="styles/legend/backgroundlandscape_0_89.png" /> 89<br />\
    <img src="styles/legend/backgroundlandscape_0_90.png" /> 90<br />\
    <img src="styles/legend/backgroundlandscape_0_91.png" /> 91<br />\
    <img src="styles/legend/backgroundlandscape_0_92.png" /> 92<br />\
    <img src="styles/legend/backgroundlandscape_0_93.png" /> 93<br />\
    <img src="styles/legend/backgroundlandscape_0_94.png" /> 94<br />\
    <img src="styles/legend/backgroundlandscape_0_95.png" /> 95<br />\
    <img src="styles/legend/backgroundlandscape_0_96.png" /> 96<br />\
    <img src="styles/legend/backgroundlandscape_0_97.png" /> 97<br />\
    <img src="styles/legend/backgroundlandscape_0_98.png" /> 98<br />\
    <img src="styles/legend/backgroundlandscape_0_99.png" /> 99<br />\
    <img src="styles/legend/backgroundlandscape_0_100.png" /> 100<br />\
    <img src="styles/legend/backgroundlandscape_0_101.png" /> 101<br />\
    <img src="styles/legend/backgroundlandscape_0_102.png" /> 102<br />\
    <img src="styles/legend/backgroundlandscape_0_103.png" /> 103<br />\
    <img src="styles/legend/backgroundlandscape_0_104.png" /> 104<br />\
    <img src="styles/legend/backgroundlandscape_0_105.png" /> 105<br />\
    <img src="styles/legend/backgroundlandscape_0_106.png" /> 106<br />\
    <img src="styles/legend/backgroundlandscape_0_107.png" /> 107<br />\
    <img src="styles/legend/backgroundlandscape_0_108.png" /> 108<br />\
    <img src="styles/legend/backgroundlandscape_0_109.png" /> 109<br />\
    <img src="styles/legend/backgroundlandscape_0_110.png" /> 110<br />\
    <img src="styles/legend/backgroundlandscape_0_111.png" /> 111<br />\
    <img src="styles/legend/backgroundlandscape_0_112.png" /> 112<br />\
    <img src="styles/legend/backgroundlandscape_0_113.png" /> 113<br />\
    <img src="styles/legend/backgroundlandscape_0_114.png" /> 114<br />\
    <img src="styles/legend/backgroundlandscape_0_115.png" /> 115<br />\
    <img src="styles/legend/backgroundlandscape_0_116.png" /> 116<br />\
    <img src="styles/legend/backgroundlandscape_0_117.png" /> 117<br />\
    <img src="styles/legend/backgroundlandscape_0_118.png" /> 118<br />\
    <img src="styles/legend/backgroundlandscape_0_119.png" /> 119<br />\
    <img src="styles/legend/backgroundlandscape_0_120.png" /> 120<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/backgroundlandscape_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -1430.000000, 2574.000000, 0.000000]
        })
    });
var lyr_borders_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'borders<br />\
    <img src="styles/legend/borders_1_0.png" /> 0<br />\
    <img src="styles/legend/borders_1_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/borders_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -1430.000000, 2574.000000, 0.000000]
        })
    });
var format_countries_2 = new ol.format.GeoJSON();
var features_countries_2 = format_countries_2.readFeatures(json_countries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_countries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_countries_2.addFeatures(features_countries_2);
var lyr_countries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_countries_2, 
                style: style_countries_2,
                popuplayertitle: 'countries',
                interactive: true,
                title: '<img src="styles/legend/countries_2.png" /> countries'
            });

lyr_backgroundlandscape_0.setVisible(true);lyr_borders_1.setVisible(true);lyr_countries_2.setVisible(true);
var layersList = [lyr_backgroundlandscape_0,lyr_borders_1,lyr_countries_2];
lyr_countries_2.set('fieldAliases', {'name': 'name', });
lyr_countries_2.set('fieldImages', {'name': '', });
lyr_countries_2.set('fieldLabels', {'name': 'no label', });
lyr_countries_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});