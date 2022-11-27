
import UserRoutes from './UserRoutes.js'

export default function(app)
{
    app.use('/user', UserRoutes);
   
};