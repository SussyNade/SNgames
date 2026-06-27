import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const _sb = createClient(
  'https://sgbzffgrymkahfnpfmnd.supabase.co',
  'sb_publishable_KL1Z6CKu8XOWfqlci0eZww_xGmD3-J6'
);

async function registrarSessao(game_id) {
  try {
    await _sb.from('game_sessions').insert({ game_id });
  } catch (_) {}
}

async function buscarPopulares() {
  try {
    const { data, error } = await _sb
      .from('game_sessions')
      .select('game_id')
      .limit(5000);
    if (error || !data) return [];
    const counts = {};
    data.forEach(({ game_id }) => { counts[game_id] = (counts[game_id] || 0) + 1; });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 50)
      .map(([id]) => id);
  } catch (_) { return []; }
}

async function buscarEmAlta() {
  try {
    const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const { data, error } = await _sb
      .from('game_sessions')
      .select('game_id')
      .gte('played_at', since)
      .limit(5000);
    if (error || !data) return [];
    const counts = {};
    data.forEach(({ game_id }) => { counts[game_id] = (counts[game_id] || 0) + 1; });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 50)
      .map(([id]) => id);
  } catch (_) { return []; }
}

window._sndb = { registrarSessao, buscarPopulares, buscarEmAlta };
(window._sndbQueue || []).forEach(id => registrarSessao(id));
window._sndbQueue = [];
if (typeof window._sndbOnReady === 'function') window._sndbOnReady();
