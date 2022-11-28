
import UserRoutes from './UserRoutes.js'
import SensorRoutes from './SensorRoutes.js'
export default function(app)
{
    app.use('/user', UserRoutes);
    // app.use('/sensor',SensorRoutes);
   
};