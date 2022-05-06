var wms_layers = [];

var format_ejemplo_0 = new ol.format.GeoJSON();
var features_ejemplo_0 = format_ejemplo_0.readFeatures(json_ejemplo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ejemplo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ejemplo_0.addFeatures(features_ejemplo_0);
var lyr_ejemplo_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejemplo_0, 
                style: style_ejemplo_0,
                interactive: true,
    title: 'ejemplo<br />\
    <img src="styles/legend/ejemplo_0_0.png" /> CAPITAL<br />\
    <img src="styles/legend/ejemplo_0_1.png" /> GENERAL ALVEAR<br />\
    <img src="styles/legend/ejemplo_0_2.png" /> GODOY CRUZ<br />\
    <img src="styles/legend/ejemplo_0_3.png" /> GUAYMALLEN<br />\
    <img src="styles/legend/ejemplo_0_4.png" /> JUNIN<br />\
    <img src="styles/legend/ejemplo_0_5.png" /> LA PAZ<br />\
    <img src="styles/legend/ejemplo_0_6.png" /> LAS HERAS<br />\
    <img src="styles/legend/ejemplo_0_7.png" /> LAVALLE<br />\
    <img src="styles/legend/ejemplo_0_8.png" /> LUJAN<br />\
    <img src="styles/legend/ejemplo_0_9.png" /> MAIPU<br />\
    <img src="styles/legend/ejemplo_0_10.png" /> MALARGUE<br />\
    <img src="styles/legend/ejemplo_0_11.png" /> RIVADAVIA<br />\
    <img src="styles/legend/ejemplo_0_12.png" /> SAN CARLOS<br />\
    <img src="styles/legend/ejemplo_0_13.png" /> SAN MARTIN<br />\
    <img src="styles/legend/ejemplo_0_14.png" /> SAN RAFAEL<br />\
    <img src="styles/legend/ejemplo_0_15.png" /> SANTA ROSA<br />\
    <img src="styles/legend/ejemplo_0_16.png" /> TUNUYAN<br />\
    <img src="styles/legend/ejemplo_0_17.png" /> TUPUNGATO<br />'
        });
var format_COMISARIAS_1 = new ol.format.GeoJSON();
var features_COMISARIAS_1 = format_COMISARIAS_1.readFeatures(json_COMISARIAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMISARIAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMISARIAS_1.addFeatures(features_COMISARIAS_1);
var lyr_COMISARIAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMISARIAS_1, 
                style: style_COMISARIAS_1,
                interactive: true,
                title: '<img src="styles/legend/COMISARIAS_1.png" /> COMISARIAS'
            });

lyr_ejemplo_0.setVisible(true);lyr_COMISARIAS_1.setVisible(true);
var layersList = [lyr_ejemplo_0,lyr_COMISARIAS_1];
lyr_ejemplo_0.set('fieldAliases', {'INDEC_ID': 'INDEC_ID', 'MUNICIPIO': 'MUNICIPIO', 'DEPTO_CORT': 'DEPTO_CORT', 'MUN_ID': 'MUN_ID', 'FID_ZONA': 'FID_ZONA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'DEPTO CANT': 'DEPTO CANT', 'CANTIDAD': 'CANTIDAD', 'OASIS': 'OASIS', });
lyr_COMISARIAS_1.set('fieldAliases', {'COMISARIA': 'COMISARIA', 'ID_COMI': 'ID_COMI', 'DEPTO': 'DEPTO', 'OASIS': 'OASIS', 'Fiscalias': 'Fiscalias', 'Crias': 'Crias', 'ID': 'ID', });
lyr_ejemplo_0.set('fieldImages', {'INDEC_ID': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DEPTO_CORT': 'TextEdit', 'MUN_ID': 'Range', 'FID_ZONA': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'DEPTO CANT': 'TextEdit', 'CANTIDAD': 'TextEdit', 'OASIS': 'TextEdit', });
lyr_COMISARIAS_1.set('fieldImages', {'COMISARIA': 'TextEdit', 'ID_COMI': 'Range', 'DEPTO': 'TextEdit', 'OASIS': 'TextEdit', 'Fiscalias': 'TextEdit', 'Crias': 'TextEdit', 'ID': 'TextEdit', });
lyr_ejemplo_0.set('fieldLabels', {'INDEC_ID': 'no label', 'MUNICIPIO': 'no label', 'DEPTO_CORT': 'no label', 'MUN_ID': 'no label', 'FID_ZONA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'DEPTO CANT': 'no label', 'CANTIDAD': 'no label', 'OASIS': 'no label', });
lyr_COMISARIAS_1.set('fieldLabels', {'COMISARIA': 'no label', 'ID_COMI': 'no label', 'DEPTO': 'no label', 'OASIS': 'no label', 'Fiscalias': 'no label', 'Crias': 'no label', 'ID': 'no label', });
lyr_COMISARIAS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});