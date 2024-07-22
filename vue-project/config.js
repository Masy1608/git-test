// config.js
import { EventEmitter } from 'events';

// Augmenter la limite par défaut globale à 20 écouteurs
EventEmitter.defaultMaxListeners = 20;
