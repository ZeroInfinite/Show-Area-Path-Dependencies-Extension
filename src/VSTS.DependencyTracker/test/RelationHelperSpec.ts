﻿
 //---------------------------------------------------------------------
 // <copyright file="RelationHelperSpec.ts">
 //    This code is licensed under the MIT License.
 //    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF 
 //    ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
 //    TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
 //    PARTICULAR PURPOSE AND NONINFRINGEMENT.
 // </copyright>
 // <summary>Testing the Helpers classes</summary>
 //---------------------------------------------------------------------

/// <reference path="../scripts/Helpers.ts" />
/// <reference path="../typings/jasmine/jasmine.d.ts" />

describe('RelationHelper', () => {
    it('FindIDFromLink', () => {
        var uri = "http://blha/blah/blah/405"
        var id = RelationHelper.FindIDFromLink(uri);
        expect(id).toBe(405);
    });
});