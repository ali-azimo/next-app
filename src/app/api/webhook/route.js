import { Webhook } from "svix";
import { headers } from "next/headers";


export async function POST(req) {
    const SIGNING_SECRET = process.env.SIGNING_SECRET

    if(!SIGNING_SECRET){
        throw new Error('Erro: Por favor adicone o SIGNING_SECRET no Clerk Dasboard no arquivo .env ou .env.local')
    }

    //Crar no Svix no instant secrets
    const wh = new Webhook(SIGNING_SECRET);

    //Ger header
    const headerPayload = await headers();
    const svix_id = headerPayload['svix-id'];
    const svix_timestamp = headerPayload['svix-timestamp'];
    const svix_signature = headerPayload['svix-signature'];

    //Verificar se o webhook é valido
    if(!svix_id || !svix_timestamp || !svix_signature){
        return new Response('Erro: Falta de Svix Headers', {
            status: 400,
        })
    }
    //Obter dados do bobdy
    const payload = await req.json();
    const body = JSON.stringify(payload);

    let evt
    //Verificar payload
    try{
       evt = wh.verify(body,{
            'svix_id':svix_id,
            'svix_timestamp': svix_timestamp,
            'svix_signature': svix_signature
        })
       }catch(err){
        console.error('erro: Nao foi possivel verificar o webhook', err)
        return new Response('Erro: Erro de verificacao', {
            status: 400,
        })
       } 
       //Verificar se o evento é valido com  payload

       const {id} = evt.data;
       const eventType = evt.type;

    if(evt.type === 'user.created'){
        console.log('Usuario criado');
    }
    if(evt.type === 'user.updated'){
        console.log('Usuario atualzado');
    }
    if(evt.type === 'user.deleted'){
        console.log('Usuario deletado');
    }
       return new Response('Webhook recebido com sucesso', {
           status: 200,
       })
    }
