import { INCREMENTSEGITIGA, DECREMENTSEGITIGA, LUASSEGITIGA, KELILINGSEGITIGA } from "../actions/segitiga.action";

const initialState = {
  sisiSegitiga: 0,
  luasSegitiga: 0,
  kelilingSegitiga: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTSEGITIGA:
      return {
        sisiSegitiga: state.sisiSegitiga + 1,
        luasSegitiga: state.luasSegitiga,
        kelilingSegitiga: state.kelilingSegitiga
      };
    case DECREMENTSEGITIGA:
      return {
        sisiSegitiga: state.sisiSegitiga - 1,
        luasSegitiga: state.luasSegitiga,
        kelilingSegitiga: state.kelilingSegitiga
      };
    case LUASSEGITIGA:
      return {
        sisiSegitiga: state.sisiSegitiga,
        luasSegitiga: ((state.sisiSegitiga * state.sisiSegitiga) / 4) * 1.76,
        kelilingSegitiga: state.kelilingSegitiga
      };
    case KELILINGSEGITIGA:
      return {
        sisiSegitiga: state.sisiSegitiga,
        luasSegitiga: state.luasSegitiga,
        kelilingSegitiga: state.sisiSegitiga * 3
      };
    default:
      return state;
  }
};
