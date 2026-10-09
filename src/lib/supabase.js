import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ylfcvfoffjvublvdvrpu.supabase.co'
const supabasePublishableKey = 'sb_publishable_5GwshpShnr6WS_VIkcnsVQ_ckDTrfw6'

export const supabase = createClient(
    supabaseUrl,
    supabasePublishableKey
)
