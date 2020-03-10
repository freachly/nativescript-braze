import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export class Common {

}

export enum CardCategory {
    'ADVERTISING' = 'advertising',
    'ANNOUNCEMENTS' = 'announcements',
    'NEWS' = 'news',
    'SOCIAL' = 'social',
    'NO_CATEGORY' = 'no_category',
    'ALL' = 'all'
}

export enum NotificationSubscriptionTypes {
    'OPTED_IN' = 'optedin',
    'SUBSCRIBED' = 'subscribed',
    'UNSUBSCRIBED' = 'unsubscribed'
}

export enum Genders {
    'FEMALE' = 'f',
    'MALE' = 'm',
    'NOT_APPLICABLE' = 'n',
    'OTHER' = 'o',
    'PREFER_NOT_TO_SAY' = 'p',
    'UNKNOWN' = 'u'
}

export enum ContentCardTypes {
    'CLASSIC' = 'Classic',
    'BANNER' = 'Banner',
    'CAPTIONED' = 'Captioned'
}

export enum Events {
    'CONTENT_CARDS_UPDATED' = 'contentCardsUpdated'
}