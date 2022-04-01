import SeekerModelGenerated from "./generated/SeekerModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = SeekerModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await SeekerModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...SeekerModelGenerated,
  ...customModel
};
