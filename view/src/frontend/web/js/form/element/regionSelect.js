/**
 * @author Bartosz Herba <b.herba@ctidigital.com>
 * @copyright 2017 CtiDigital Sp. z o.o.
 */
define([
    'ko',
    'Magento_Ui/js/form/element/region',
    'GoogleAddressLookup/model/address/addressData',
], function (ko, Element, addressData) {
    "use strict";

    return Element.extend({
        initialize: function () {
            this._super();
            this.form = addressData.getForm(this.autocomplete_id);

            this.form.address.subscribe(function(address) {
                if (addressFieldsMap.map[this.inputName]) {
                    this.value(valueExtractor(address, addressFieldsMap.map[this.inputName]));
                }
            });

            return this;
        }
    });
});
