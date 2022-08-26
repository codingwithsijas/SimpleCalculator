sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("in.sijas.coding.calculator.controller.First", {
			onInit: function () {
				var oCalcData = {
					op1: '1',
					op2: '2',
					operator: '+',
					result: '',
					aSelect: [{
						key: '+'
					}, {
						key: '-'
					}, {
						key: '*'
					}, {
						key: '/'
					}]
				},
					oModel = new JSONModel(oCalcData);
				this.getView().setModel(oModel);
			},
			calculate: function () {
				var oModel = this.getView().getModel(),
					sValue1 = parseInt(oModel.getProperty("/op1"), 10),
					sValue2 = parseInt(oModel.getProperty("/op2"), 10),
					sOperator = oModel.getProperty("/operator"),
					iResult = 0;
				switch (sOperator) {
					case '+':
						iResult = sValue1 + sValue2;
						break;
					case '-':
						iResult = sValue1 - sValue2;
						break;
					case '*':
						iResult = sValue1 * sValue2;
						break;
					case '/':
						iResult = sValue1 / sValue2;
						break;
				}
				oModel.setProperty("/result", iResult);
			},
			formatResult: function (iResult) {
				var oBundle = this.getView().getModel("i18n").getResourceBundle(),
					sResult = oBundle.getText("appResult", [iResult]);
				if(iResult)
					return sResult;
				return "";
			}
		});
	});
