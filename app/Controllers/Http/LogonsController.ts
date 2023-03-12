import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LogonsController {
    public index({ view }: HttpContextContract) {
        return view.render('login')
    }

    public async login({ auth, request, response }: HttpContextContract) {
        const username = request.input('username')
        const room = request.input('room')

        try {
            await auth.use('web').attempt(username, room)
            return response.redirect().toRoute('chats.index')
        } catch (error) {
            console.log(error);
            
        }
    }
}