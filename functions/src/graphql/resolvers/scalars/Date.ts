import { GraphQLError, GraphQLScalarType, Kind } from 'graphql';
import moment from 'moment';
import { OUTPUT_FORMAT } from '../../../utils/toDate';

export default new GraphQLScalarType({
  name: 'Date',

  description: `Date in ${OUTPUT_FORMAT} format`,

  serialize(value): string | null {
    if (value === '') {
      return null;
    }

    return moment(value, OUTPUT_FORMAT).format(OUTPUT_FORMAT);
  },

  parseValue(value): string | null {
    if (value === '') {
      return null;
    }

    return moment(value, OUTPUT_FORMAT).format(OUTPUT_FORMAT);
  },

  parseLiteral(ast): string | null {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        `Can only validate strings but got a: ${
          ast.kind
        }`,
      );
    }

    if (ast.value === '') {
      return null;
    }

    return moment(ast.value, OUTPUT_FORMAT).format(OUTPUT_FORMAT);
  },
});
