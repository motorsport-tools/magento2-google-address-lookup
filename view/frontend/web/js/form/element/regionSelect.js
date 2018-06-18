/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */
define([
    'ko',
    'Magento_Ui/js/form/element/region',
    'GoogleAddressLookup/model/address/addressData',
    'GoogleAddressLookup/model/address/addressFieldsMap',
    'GoogleAddressLookup/model/address/valueExtractor'
], function (ko, Element, addressData, addressFieldsMap, valueExtractor) {
    "use strict";

    return Element.extend({
        initialize: function () {
            this._super();
            var self = this;
            this.form = addressData.getForm(this.autocomplete_id);

            this.form.address.subscribe(function(address) {
                if (addressFieldsMap.map[self.inputName]) {
                    self.value(valueExtractor(address, addressFieldsMap.map[self.inputName]));
                }
            });

            return this;
        }
    });
});
