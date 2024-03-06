import {Resolver} from '@parcel/plugin';
import path from 'path';
import { fileURLToPath } from 'url';

export default new Resolver({
    async resolve({specifier,logger, dependency}) {
        // logger.verbose({dependency})
        // dependency.specifier
        if (specifier.startsWith('@app')) {
            const restPath = specifier.split('@app')
            return {
                filePath: path.join(path.dirname(fileURLToPath(import.meta.url)), '../', restPath[1]+'.js')
            };
        }

        return null;
    }
});