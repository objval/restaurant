
      INSERT INTO locations (
        id, name, concept, path, coordinates, theme, images,
        description, long_description, hours, specialties, atmosphere,
        price_range, contact, features, stats, social_proof, social_media, promotions
      ) VALUES (
        'arbol',
        'El Árbol',
        'Comida Familiar',
        '/arbol',
        '{"lat":-38.985779,"lng":-72.63916}',
        '{"primary":"#2D5016","secondary":"#D4AF37","accent":"#F4E04D","background":"#FEFDF8","text":"#1A1A1A","overlay":"rgba(45, 80, 22, 0.85)"}',
        '{"hero":"/arbol/1.jpg","interior":"/arbol/2.jpg","signature":"/arbol/ceviche.jpg","ambiance":"/arbol/4.jpg","gallery":["/arbol/1.jpg","/arbol/2.jpg","/arbol/3.jpg","/arbol/4.jpg"]}',
        'El lugar perfecto para reuniones familiares y celebraciones especiales con elegancia y calidez.',
        'En El Árbol Café Restaurante somos un espacio familiar y acogedor, creado con amor para que te sientas como en casa. Aquí, cada detalle ha sido pensado para brindar una experiencia cálida, cercana y llena de sabor.

Nos encanta ser el punto de encuentro para quienes buscan compartir un buen café, disfrutar de una rica comida o celebrar momentos especiales rodeados de cariño. Nuestro compromiso es entregarte atención personalizada, un ambiente tranquilo y esa sensación de hogar que tanto valoramos.',
        '{"weekdays":"Lun-Mié: 11:00 - 22:30 | Jue-Vie: 11:00 - 23:30","weekends":"Sáb: 11:30 - 23:30 | Dom: CERRADO","monday":"11:00 - 22:30","tuesday":"11:00 - 22:30","wednesday":"11:00 - 22:30","thursday":"11:00 - 23:30","friday":"11:00 - 23:30","saturday":"11:30 - 23:30","sunday":"CERRADO"}',
        ARRAY['Menús Familiares','Mesas Grandes','Menú Infantil','Celebraciones'],
        ARRAY['Familiar','Cálido','Acogedor','Celebraciones'],
        '$$-$$$',
        '{"phone":"+56942262266","address":"Manuel Rodríguez 792, Pitrufquén, Araucanía","email":"contacto@elarbol.cl"}',
        ARRAY['Sillas para Niños','Área de Juegos','Menú Familiar','Eventos Privados'],
        '{"yearsOpen":8,"dishes":45,"chefs":6,"awards":3}',
        '{"reviews":1247,"googleRating":4.7}',
        '{"instagram":"https://www.instagram.com/elarbol_cafe_restaurante","facebook":"https://www.facebook.com/p/Caf%C3%A9-Restaurante-El-%C3%81rbol-100057454611429/","whatsapp":"+56942262266"}',
        '[{"title":"30% DESCUENTO","subtitle":"En pastas frescas","schedule":"Todos los sábados","color":"#2D5016"},{"title":"2X EN CÓCTELES","subtitle":"Promoción especial","schedule":"Lunes a Viernes | 16:00 a 20:00hrs","color":"#D4AF37"},{"title":"MENÚ TRES TIEMPOS","subtitle":"Entrada, plato principal y postre","schedule":"Todos los días","color":"#F4E04D"}]'
      )
      ON CONFLICT (id) DO NOTHING
    ;


      INSERT INTO locations (
        id, name, concept, path, coordinates, theme, images,
        description, long_description, hours, specialties, atmosphere,
        price_range, contact, features, stats, social_proof, social_media, promotions
      ) VALUES (
        '1898',
        '1898',
        'Beer Bar',
        '/1898',
        '{"lat":-39.0089,"lng":-72.6412}',
        '{"primary":"#8B4513","secondary":"#DEB887","accent":"#FF6B35","background":"#FFF8F0","text":"#2F1B14","overlay":"rgba(139, 69, 19, 0.8)"}',
        '{"hero":"/locations/1898.jpg","interior":"/locations/1898.jpg","signature":"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop","ambiance":"/locations/1898.jpg","gallery":["/1898/1.jpg","/1898/2.jpg","/1898/3.jpg"]}',
        'El lugar perfecto para una noche relajada con amigos, cervezas artesanales y ambiente de bar.',
        'Somos un bar familiar con alma local y espíritu relajado. En Beer Bar 1898 creemos que no hay nada mejor que compartir una buena cerveza, buena comida y buenas conversaciones en un ambiente cálido y cercano.

Abrimos nuestras puertas para ofrecerte un espacio cómodo, con atención amable, cervezas bien tiradas y una carta pensada para disfrutar entre amigos, en pareja o en familia. Aquí no hay prisa: solo ganas de pasarlo bien, reír, relajarse y volver.',
        '{"weekdays":"Mar-Mié: 17:00 - 00:30 | Jue: 17:00 - 01:30 | Vie-Sáb: 17:00 - 03:30","weekends":"Vie-Sáb: 17:00 - 03:30 | Dom: CERRADO","monday":"CERRADO","tuesday":"17:00 - 00:30","wednesday":"17:00 - 00:30","thursday":"17:00 - 01:30","friday":"17:00 - 03:30","saturday":"17:00 - 03:30","sunday":"CERRADO"}',
        ARRAY['Cervezas Artesanales','Cócteles de Autor','Música en Vivo'],
        ARRAY['Bar','Nocturno','Social','Relajado'],
        '$$-$$$',
        '{"phone":"+56997180227","address":"Francisco Bilbao 539, Pitrufquén, Araucanía","email":"contacto@1898.cl"}',
        ARRAY['Barra de Cervezas','Música en Vivo','Terraza','Karaoke'],
        '{"yearsOpen":5,"dishes":38,"chefs":4,"awards":2}',
        '{"reviews":892,"googleRating":4.8}',
        '{"instagram":"https://www.instagram.com/beerbar1898","facebook":"https://www.facebook.com/1898beerbar","whatsapp":"+56997180227"}',
        '[{"title":"COMBO HEINEKEN","subtitle":"Heineken + Completo italiano por $6.990","schedule":"Martes a Viernes | 16:00 a 21:00hrs","color":"#8B4513"},{"title":"NOCHE DE KARAOKE","subtitle":"Shot de tequila gratis por participar","schedule":"Viernes y Sábados | Desde 20:30hrs","color":"#FF6B35"},{"title":"TRAGOS ESPECIALES 2X","subtitle":"Margarita, Caipirinha, Mojito, Pisco Sour y más","schedule":"Martes a Viernes | 16:00 a 21:00hrs","color":"#DEB887"}]'
      )
      ON CONFLICT (id) DO NOTHING
    ;


      INSERT INTO locations (
        id, name, concept, path, coordinates, theme, images,
        description, long_description, hours, specialties, atmosphere,
        price_range, contact, features, stats, social_proof, social_media, promotions
      ) VALUES (
        'capriccio',
        'Capriccio',
        'Bistro Bar',
        '/capriccio',
        '{"lat":-39.0098,"lng":-72.6398}',
        '{"primary":"#B8860B","secondary":"#FFD700","accent":"#FFA500","background":"#FFFAF0","text":"#3D2914","overlay":"rgba(184, 134, 11, 0.85)"}',
        '{"hero":"/locations/capriccio.jpg","interior":"/locations/capriccio.jpg","signature":"https://images.unsplash.com/photo-1587223962930-cb7f31384c19?w=500&h=400&fit=crop","ambiance":"/locations/capriccio.jpg","gallery":["/capriccio/1.jpg","/capriccio/2.jpg","/capriccio/3.jpg"]}',
        'Ambiente elegante y sofisticado, perfecto para cenas especiales y experiencias gastronómicas únicas.',
        'Capriccio combina la elegancia de un bistro europeo con la sofisticación de un bar moderno. Ideal para cenas románticas, reuniones de negocios o cualquier ocasión especial que requiera un toque de distinción.',
        '{"weekdays":"Mar-Mié: 11:00 - 00:30 | Jue: 11:00 - 02:00 | Vie: 11:00 - 03:00","weekends":"Sáb: 11:00 - 02:00 | Dom: 11:00 - 22:00","monday":"CERRADO","tuesday":"11:00 - 00:30","wednesday":"11:00 - 00:30","thursday":"11:00 - 02:00","friday":"11:00 - 03:00","saturday":"11:00 - 02:00","sunday":"11:00 - 22:00"}',
        ARRAY['Cocina de Autor','Cócteles Premium','Vinos Seleccionados','Ambiente Ejecutivo'],
        ARRAY['Elegante','Sofisticado','Romántico','Ejecutivo'],
        '$$$-$$$$',
        '{"phone":"+56930527291","address":"Av. Balmaceda 377, Pitrufquén, Araucanía","email":"reservas@capricciobistro.cl"}',
        ARRAY['Carta de Vinos Premium','Música Ambient','Terraza VIP','Servicio Valet'],
        '{"yearsOpen":12,"dishes":52,"chefs":8,"awards":5}',
        '{"reviews":2156,"googleRating":4.8}',
        '{"instagram":"https://www.instagram.com/capriccio.pitrufquen/","facebook":"https://www.facebook.com/capricciobistro","whatsapp":"+56930527291"}',
        '[{"title":"JUEVES DE CHICAS","subtitle":"Promociones especiales","schedule":"Jueves | Desde apertura hasta cierre","color":"#FF7F50"}]'
      )
      ON CONFLICT (id) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('specials', 'Especiales 2X', 'Ofertas y promociones especiales', '🎉', 0)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('recommended', 'Recomendado para Hoy', 'Sugerencias especiales de nuestro chef', '⭐', 1)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('mains', 'Platos de Autor', 'Nuestros platos estrella', '🍽️', 2)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('pizzas', 'Pizzas', 'Pizzas a la piedra con ingredientes frescos', '🍕', 3)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('sandwiches', 'Sándwiches', 'Opciones contundentes y sabrosas', '🥪', 4)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('sharing', 'Tablas para Compartir', 'Ideales para disfrutar en grupo', '🍱', 5)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('appetizers', 'Entradas', 'Perfectas para comenzar tu comida', '🥗', 6)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('salads', 'Ensaladas', 'Creaciones frescas y saludables', '🥬', 7)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('seafood', 'Mariscos', 'Lo mejor del océano', '🐟', 8)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('steaks', 'Carnes y Parrilla', 'Cortes premium y especialidades a la parrilla', '🥩', 9)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('pasta', 'Pastas y Risottos', 'Clásicos de inspiración italiana', '🍝', 10)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('soups', 'Sopas y Cremas', 'Opciones frescas y nutritivas', '🥣', 11)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('cocktails', 'Cócteles', 'Tragos y cócteles artesanales', '🍹', 12)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('beers', 'Cervezas y Shop', 'Una selección de cervezas artesanales y de barril', '🍺', 13)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('wines', 'Vinos y Destilados', 'Nuestra selección de vinos y licores', '🍷', 14)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('beverages', 'Bebestibles y Jugos', 'Refrescos y bebidas sin alcohol', '🥤', 15)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('coffee', 'Cafetería', 'Café de grano, tés e infusiones', '☕', 16)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('desserts', 'Repostería y Pastelería', 'Dulces finales para tu comida', '🍰', 17)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('breakfast', 'Desayunos', 'Para empezar el día con energía', '🍳', 18)
      ON CONFLICT (slug) DO NOTHING
    ;


      INSERT INTO categories (slug, name, description, icon, display_order)
      VALUES ('kids', 'Menú de Niños', 'Platos pensados para los más pequeños', '🧒', 19)
      ON CONFLICT (slug) DO NOTHING
    ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'guinness-extra-stout-473-ml',
            'Guinness extra stout 473 ML',
            'Cerveza premuim Irlanda (lata 473 ML) extra stout',
            5000,
            'https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=500&h=400&fit=crop',
            '1-2 min',
            165,
            NULL,
            ARRAY['Malta','Lúpulo','Levadura','Agua'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'corona',
            'Corona',
            'Cerveza refrescante',
            3500,
            'https://images.unsplash.com/photo-1558642891-54be180ea339?w=500&h=400&fit=crop',
            '1-2 min',
            150,
            NULL,
            ARRAY['Malta','Lúpulo','Levadura','Agua'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'royal',
            'Royal',
            'Cerveza refrescante',
            3500,
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
            '1-2 min',
            178,
            NULL,
            ARRAY['Malta','Lúpulo','Levadura','Agua'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'heineken',
            'Heineken',
            'Cerveza refrescante',
            3500,
            'https://images.unsplash.com/photo-1569937756564-eb67861bf709?w=500&h=400&fit=crop',
            '1-2 min',
            161,
            NULL,
            ARRAY['Malta','Lúpulo','Levadura','Agua'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'shop-heineken',
            'Shop Heineken',
            'Cerveza refrescante',
            4000,
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
            '1-2 min',
            152,
            NULL,
            ARRAY['Malta','Lúpulo','Levadura','Agua'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'shop-kunstman-torobayo',
            'Shop Kunstman Torobayo',
            'Cerveza refrescante',
            6000,
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
            '1-2 min',
            130,
            NULL,
            ARRAY['Malta','Lúpulo','Levadura','Agua'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'chelada',
            'Chelada',
            'sal en la boca del shop mas 2 oz de jugi de limon',
            1000,
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
            '1-2 min',
            123,
            NULL,
            ARRAY['Malta','Lúpulo','Levadura','Agua'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'michelada',
            'michelada',
            'sal y merquen en la boca del shop ademas de 2 oz de limon',
            1000,
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
            '1-2 min',
            154,
            NULL,
            ARRAY['Malta','Lúpulo','Levadura','Agua'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'shop-ruta-s70-ambar',
            'Shop ruta S70 Ambar',
            'Cerveza refrescante',
            5000,
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
            '1-2 min',
            130,
            NULL,
            ARRAY['Malta','Lúpulo','Levadura','Agua'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cuello-negro-ambar',
            'Cuello negro Ambar',
            'Cerveza refrescante',
            5000,
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
            '1-2 min',
            138,
            NULL,
            ARRAY['Malta','Lúpulo','Levadura','Agua'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            '2x-shop-heineken',
            '2X Shop heineken',
            'Lunes a Jueves de 17:00 a 21:00 hrs',
            6000,
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
            '1-2 min',
            164,
            NULL,
            ARRAY['Malta','Lúpulo','Levadura','Agua'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            '2x-shop-ruta-s70',
            '2X shop ruta s70',
            'Lunes a jueves de 17:00 a 21:00 hrs',
            9000,
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
            '1-2 min',
            145,
            NULL,
            ARRAY['Malta','Lúpulo','Levadura','Agua'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'austral-calafate',
            'Austral Calafate',
            'Austral Calafate',
            4900,
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
            '1-2 min',
            156,
            NULL,
            ARRAY['Malta','Lúpulo','Levadura','Agua'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pisco-sour',
            'Pisco sour',
            'Elaborado con pisco chileno proveniente del valle del Elqui, agitado con limón y almíbar artesanal.',
            5000,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            256,
            NULL,
            ARRAY['Pisco','Jugo de limón','Jarabe de goma','Clara de huevo','Amargo de Angostura'],
            ARRAY['Huevos'],
            ARRAY['gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pisco-sour-frutales',
            'Pisco sour frutales',
            'Elaborado con pisco chileno proveniente del valle del Elqui, agitado con limón, almíbar artesanal y con jugo frutal a elección.',
            5750,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            188,
            NULL,
            ARRAY['Pisco','Jugo de limón','Jarabe de goma','Clara de huevo','Jugo de fruta (maracuyá, mango o frambuesa)','Amargo de Angostura'],
            ARRAY['Huevos'],
            ARRAY['gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'martini-dry',
            'Martini dry',
            'Elaborado destilado Martini dry, acompañado de ginebra y aceituna para dar un efecto seco y aromático.',
            5750,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            203,
            NULL,
            ARRAY['Ginebra','Vermouth seco','Aceituna'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pina-colada',
            'Piña colada',
            'Coctel de origen Puerto riqueño, elaborada con base de ron, crema de coco, coco rallado, piña natural y almíbar artesanal.',
            5750,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            183,
            NULL,
            ARRAY['Ron','Crema de coco','Coco rallado','Piña natural','Jarabe de goma'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mojito-clasico',
            'Mojito clásico',
            'Cóctel refrescante elaborado con ron, jugo de limón natural, menta fresca, soda y almíbar artesanal.',
            6000,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            227,
            NULL,
            ARRAY['Ron','Jugo de limón','Menta fresca','Agua con gas','Jarabe de goma'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mojito-frutal',
            'Mojito frutal',
            'Cóctel refrescante elaborado con ron, jugo de limón natural, menta fresca, fruta natural y almíbar artesanal.',
            6500,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            245,
            NULL,
            ARRAY['Ron','Limón','Menta'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mojito-cerveza',
            'Mojito cerveza',
            'Cóctel refrescante elaborado con ron, jugo de limón natural, menta fresca, almíbar artesanal y botellín
de cerveza a elección.',
            7600,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            214,
            NULL,
            ARRAY['Ron','Limón','Menta'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tequila-margarita',
            'Tequila margarita',
            'Cóctel elaborado con tequila mexicano , jugo de limón natural, toque de triple sec y copa enllantada con sal.',
            5750,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            247,
            NULL,
            ARRAY['Tequila','Limón','Triple sec'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tequila-margarita-frutal',
            'Tequila margarita frutal',
            'Cóctel elaborado con tequila mexicano , jugo de limón natural, toque de triple sec, jugo de fruta y copa enllantada con sal.',
            6300,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            238,
            NULL,
            ARRAY['Tequila','Limón','Triple sec'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ruso-blanco',
            'Ruso blanco',
            'Cóctel elaborado con vodka, licor de café, crema de leche, decorado con salsa de chocolate y marrasquino rojo.',
            6300,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            192,
            NULL,
            ARRAY['Vodka','Licor de café','Crema de leche','Salsa de chocolate','Marrasquino rojo'],
            ARRAY['Lácteos'],
            ARRAY['vegetarian','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'vaina',
            'Vaina',
            'Cóctel chileno elaborado con vino dulce, licor de cacao, cognac, espesado con yema de huevo y polvoreada con canela.',
            4600,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            243,
            NULL,
            ARRAY['Vino dulce','Licor de cacao','Cognac','Yema de huevo','Canela'],
            ARRAY['Huevos'],
            ARRAY['vegetarian','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'caipirina',
            'Caipiriña',
            'Cóctel elaborado con cachaca brasileña, jugo natural de limón, almíbar artesanal y soda.',
            5000,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            239,
            NULL,
            ARRAY['Cachaça','Jugo de limón','Azúcar','Hielo'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'old-fashion',
            'old fashion',
            'Cóctel elaborado con whisky, saborizado con azúcar rubia, amargo de angostura, naranja deshidratada y marrasquino.',
            6300,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            222,
            NULL,
            ARRAY['Whisky','Azúcar','Amargo de Angostura','Naranja','Cereza'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ramazzotti',
            'ramazzotti',
            'Cóctel elaborado con licor italiano a base de flor de hibiscus, flor de azahar y toques de naranja, con espumante, soda y frutos rojos.',
            6300,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            241,
            NULL,
            ARRAY['Ramazzotti','Vino espumoso','Agua con gas','Frutos rojos','Naranja'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'aperol',
            'aperol',
            'Cóctel italiano elaborado a base de genciana, ruibarbo y quina, con espumante, soda y frutos rojos.',
            6300,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            199,
            NULL,
            ARRAY['Aperol','Vino espumoso','Agua con gas','Naranja'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cosmopolitan',
            'cosmopolitan',
            'Cóctel 1898 elaborado con vodka, jugo de limón natural, licor de cassis y endulzado con granadina.',
            5750,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            191,
            NULL,
            ARRAY['Vodka','Jugo de arándano','Jugo de lima','Triple sec'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'clavo-oxidado',
            'clavo oxidado',
            'Cóctel elaborado a base de whisky, endulzado con whisky especiado de miel drambuie y decorado con marrasquino.',
            7000,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            213,
            NULL,
            ARRAY['Whisky escocés','Drambuie'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mojito-ramazzotti',
            'Mojito ramazzotti',
            'Cóctel elaborado con ron, jugo de limón natural, menta fresca, almíbar natural, ramazzotti y soda.',
            6800,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            247,
            NULL,
            ARRAY['Ron','Limón','Menta'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'moscow-mule',
            'Moscow mule',
            'Cóctel elaborado con vodka, jugo de limón natural, jengibre natural, almíbar artesanal y ginger ale.',
            5750,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            196,
            NULL,
            ARRAY['Vodka','Cerveza de jengibre','Jugo de lima'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'negroni',
            'Negroni',
            'Cóctel elaborado con campari a base de infusión de hierbas amargas, plantas aromáticas, fruta, bitter rosso y ginebra.',
            7000,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            188,
            NULL,
            ARRAY['Ginebra','Campari','Vermut dulce'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pisco-sour-ramazzotti',
            'Pisco sour Ramazzotti',
            'Elaborado con pisco chileno proveniente del valle del Elqui, agitado con limón, almíbar artesanal y ramazzotti.',
            5750,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            207,
            NULL,
            ARRAY['Pisco'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'primavera',
            'Primavera',
            'Cóctel elaborado con pisco Del valle del Elqui, jugo de naranja, jugo de piña y granadina.',
            4600,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            259,
            NULL,
            ARRAY['Pisco','Jugo de naranja','Jugo de piña','Granadina'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'amareto-sour',
            'Amareto sour',
            'Cóctel elaborado con licor de avellanas amaretto, jugo de limón y almíbar artesanal.',
            5750,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            242,
            NULL,
            ARRAY['Amaretto','Jugo de limón','Jarabe de goma','Clara de huevo'],
            ARRAY['Huevos','Nueces'],
            ARRAY['vegetarian','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'daiquiri',
            'Daiquiri',
            'Cóctel elaborado con ron, jugo de limón natural y almíbar artesanal.',
            4600,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            210,
            NULL,
            ARRAY['Ron','Jugo de lima','Jarabe de goma'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'god-father',
            'god father',
            'Cóctel elaborado con whisky y licor de avellanas amaretto, decorado con marrasquino.',
            6800,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            253,
            NULL,
            ARRAY['Whisky escocés','Amaretto'],
            ARRAY['Nueces'],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'laguna-azul',
            'Laguna azul',
            'Cóctel elaborado con vodka, curacao blue y jugo de limón natural.',
            5000,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            237,
            NULL,
            ARRAY['Vodka','Blue Curaçao','Limonada','Cereza'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mega-mojito',
            'Mega mojito',
            'Cóctel refrescante de un litro elaborado con ron, jugo de limón natural, menta fresca, soda y almíbar artesanal.',
            10200,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            186,
            NULL,
            ARRAY['Ron','Limón','Menta'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mega-mojito-frutal',
            'Mega Mojito Frutal',
            'Cóctel refrescante de un litro elaborado con ron, jugo de limón natural, menta fresca, jugo de fruta, y almíbar artesanal.',
            11000,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            237,
            NULL,
            ARRAY['Ron','Limón','Menta'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mojito-blue',
            'Mojito blue',
            'Cóctel refrescante elaborado con ron, jugo de limón natural, menta fresca, curacao blue, soda y almíbar artesanal.',
            6800,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            246,
            NULL,
            ARRAY['Ron','Limón','Menta'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mojito-jagger',
            'Mojito Jagger',
            'Cóctel refrescante elaborado con ron, jugo de limón natural, menta fresca, jagermeister soda y almíbar artesanal.',
            6900,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            207,
            NULL,
            ARRAY['Ron','Limón','Menta'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'chardonay-sour',
            'Chardonay sour',
            'Cóctel elaborado con vino de cepa chardonnay, jugo de limón natural y almíbar artesanal.',
            5000,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            244,
            NULL,
            ARRAY['Chardonnay','Jugo de limón','Jarabe de goma','Clara de huevo'],
            ARRAY['Huevos'],
            ARRAY['vegetarian','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'jaggermeister',
            'jaggermeister',
            'Cóctel artesanal',
            5000,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            182,
            NULL,
            ARRAY['Jägermeister'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tom-collins',
            'Tom Collins',
            'Cóctel elaborado con ginebra, jugo de limón natural, soda y almíbar artesanal.',
            5500,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            191,
            NULL,
            ARRAY['Ginebra','Jugo de limón','Agua con gas','Jarabe de goma'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'whiskey-sour',
            'Whiskey sour',
            'Cóctel elaborado con whisky, jugo de limón y almíbar artesanal.',
            6300,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            210,
            NULL,
            ARRAY['Whisky','Jugo de limón','Jarabe de goma','Clara de huevo'],
            ARRAY['Huevos'],
            ARRAY['vegetarian','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pisco-sour-catedral',
            'Pisco sour Catedral',
            'Doble Pisco sour con base de pisco, jugo de limón, almíbar artesanal y gotas de angostura.',
            9200,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            250,
            NULL,
            ARRAY['Pisco'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ruso-negro',
            'Ruso negro',
            'Cóctel elaborado con vodka, licor de café, decorado con salsa de chocolate y marrasquino.',
            6300,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            232,
            NULL,
            ARRAY['Vodka','Licor de café'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'orgasmo',
            'Orgasmo',
            'Cóctel elaborado con crema de whisky , amaretto, licor de café y decorado con salsa de chocolate y marrasquino.',
            6300,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            254,
            NULL,
            ARRAY['Licor de café','Amaretto','Crema irlandesa'],
            ARRAY['Lácteos','Nueces'],
            ARRAY['vegetarian','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            '2x-pisco-sour',
            '2x pisco sour',
            'Lunes a jueves de 17:00 a 21:00 hrs',
            8500,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            249,
            NULL,
            ARRAY['Pisco'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            '2x-caipirinha',
            '2x caipirinha',
            'Lunes a jueves de 17:00 a 21:00 hrs',
            7400,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            249,
            NULL,
            ARRAY['Cachaça','Limón'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            '2x-ramazzotti',
            '2x Ramazzotti',
            'Lunes a jueves de 17:00 a 21:00 hrs',
            8990,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            209,
            NULL,
            ARRAY['Ramazzotti','Vino espumoso','Agua con gas','Frutos rojos','Naranja'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            '2x-mojito-frutal',
            '2x Mojito frutal',
            'Lunes a jueves de 17:00 a 21:00 hrs',
            10400,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            215,
            NULL,
            ARRAY['Ron','Limón','Menta'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            '2x-ruso-blanco',
            '2X Ruso blanco',
            'Lunes a jueves de 17:00 a 21:00 hrs',
            9990,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            207,
            NULL,
            ARRAY['Vodka','Licor de café','Crema de leche','Salsa de chocolate','Marrasquino rojo'],
            ARRAY['Lácteos'],
            ARRAY['vegetarian','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pisco-sour-peruano',
            'Pisco sour peruano',
            'Cóctel artesanal',
            6500,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            235,
            NULL,
            ARRAY['Pisco'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            '2x-tequila-margarita',
            '2X Tequila margarita',
            'Lunes a jueves de 17:00 a 21:00 hrs',
            9200,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            192,
            NULL,
            ARRAY['Tequila','Limón','Triple sec'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'fernet-branca',
            'Fernet Branca',
            'con bebida',
            4500,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            130,
            NULL,
            ARRAY['Fernet Branca','Cola'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'shot-manzanilla',
            'Shot manzanilla',
            'Bebida premium',
            3450,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            149,
            NULL,
            ARRAY['Licor de manzanilla'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'copa-de-vino-castillo-molina',
            'copa de vino Castillo Molina',
            'Bebida premium',
            3500,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            111,
            NULL,
            ARRAY['Vino tinto'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'shot-tequila',
            'Shot Tequila',
            'Bebida premium',
            4000,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            108,
            NULL,
            ARRAY['Tequila'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'shot-jose-cuervo-especial',
            'Shot Jose cuervo especial',
            'Bebida premium',
            5000,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            145,
            NULL,
            ARRAY['Tequila Jose Cuervo Especial'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            true,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'shot-jose-cuervo-reposado',
            'Shot Jose Cuervo Reposado',
            'Bebida premium',
            6300,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            109,
            NULL,
            ARRAY['Tequila Jose Cuervo Reposado'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'crema-de-whisky',
            'Crema de whisky',
            'Bebida premium',
            5400,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            114,
            NULL,
            ARRAY['Crema de whisky'],
            ARRAY['Lácteos'],
            ARRAY['vegetarian','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tanqueray',
            'Tanqueray',
            'Bebida premium',
            6900,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            136,
            NULL,
            ARRAY['Ginebra Tanqueray','Agua tónica'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'campari',
            'Campari',
            'Bebida premium',
            4500,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            103,
            NULL,
            ARRAY['Campari','Agua con gas'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'botella-vino-alto',
            'Botella vino alto',
            'Bebida premium',
            13000,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            146,
            NULL,
            ARRAY['Vino tinto'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'sangria',
            'Sangría',
            'Bebida premium',
            5900,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            114,
            NULL,
            ARRAY['Vino tinto','Fruta picada','Azúcar','Brandy'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-tequila',
            'Promo tequila',
            'Minuto feliz',
            1000,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            120,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'propeller',
            'Propeller',
            'con bebida',
            5000,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            111,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'boolton',
            'Boolton',
            'Bebida premium',
            3500,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            147,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'beefeater',
            'Beefeater',
            'con bebida',
            6900,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            121,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'gin-hendricks',
            'Gin Hendricks',
            'Bebida premium',
            6900,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            134,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tanqueray-berries',
            'Tanqueray berries',
            'Bebida premium',
            6900,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            132,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mistral-35',
            'mistral 35º',
            'con bebida',
            4600,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            111,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'gobernador',
            'Gobernador',
            'con bebida',
            5750,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            116,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mistral-nobel-barrica-40',
            'Mistral nobel barrica 40º',
            'con bebida',
            6300,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            118,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'alto-del-carmen',
            'Alto del carmen',
            'con bebida',
            4600,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            149,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'horcon-quemado',
            'Horcón quemado',
            'con bebida',
            5750,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            120,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pisco-bauza',
            'pisco bauza',
            'Bebida premium',
            4600,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            110,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'el-gobernador',
            'El Gobernador',
            'con bebida',
            5750,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            109,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mistral-nobel',
            'Mistral nobel',
            'Bebida premium',
            6300,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            141,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            '2x-pisco-mistral-35',
            '2X pisco mistral 35',
            'activo día del pisco',
            7300,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            148,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            '2x-pisco-alto-del-carmen',
            '2X Pisco alto del carmen',
            'Activo día del pisco',
            7300,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            108,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ron-habana-reserva-7-anos',
            'Ron habana reserva 7 años',
            'Bebida premium',
            8500,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            105,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'havana-reserva',
            'Havana Reserva',
            'con bebida',
            6500,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            101,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'havana-club',
            'Havana Club',
            'con bebida',
            4600,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            123,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'absolut',
            'Absolut',
            'con bebida',
            5000,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            114,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'eristoff',
            'Eristoff',
            'con bebida',
            4000,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            142,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'stolichnaya',
            'Stolichnaya',
            'con bebida',
            6900,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            120,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ballantine-s',
            'Ballantine''s',
            'con bebida',
            5000,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            120,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'johnny-red-label',
            'Johnny red label',
            'con bebida',
            5000,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            126,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'johnny-black-label',
            'Johnny Black label',
            'con bebida',
            8000,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            133,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'jack-daniels-n-7',
            'Jack Daniels Nº7',
            'con bebida',
            8000,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            131,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'chivas-regal-12-anos',
            'Chivas Regal 12 años',
            'con bebida',
            9000,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            109,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'fireball',
            'Fireball',
            'con bebida',
            6500,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            119,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'johnnie-walker-game-of-thrones',
            'Johnnie walker game of thrones',
            'whisky con notas de vainilla y fruta fresca, para los fanáticos de game of thrones.',
            8000,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            148,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'johnnie-blonde',
            'Johnnie Blonde',
            'Whisky con notas de vainilla, manzana acaramelada y caramelo, y un final suave.',
            5000,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            124,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'coca-cola',
            'coca cola',
            'Bebida refrescante',
            2500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            139,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'coca-cola-zero',
            'coca cola zero',
            'Bebida refrescante',
            2500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            122,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'fanta',
            'fanta',
            'Bebida refrescante',
            2500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            105,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'sprite',
            'sprite',
            'Bebida refrescante',
            2500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            117,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'schweppes-ginger-ale',
            'schweppes ginger ale',
            'Bebida refrescante',
            2500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            97,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'schweppes-tonica',
            'schweppes tonica',
            'Bebida refrescante',
            2500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            116,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'limonada-tradicional',
            'Limonada tradicional',
            'Bebida refrescante',
            3000,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            112,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'limonada-menta-jengibre',
            'Limonada menta jengibre',
            'Bebida refrescante',
            3500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            142,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'jugo-natural-frambuesa',
            'jugo natural frambuesa',
            'Bebida refrescante',
            4000,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            102,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'jugo-natural-de-pina',
            'jugo natural de piña',
            'Bebida refrescante',
            4000,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            143,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'jugo-natural-mango',
            'jugo natural mango',
            'Bebida refrescante',
            4000,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            117,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'jugo-natural-maracuya',
            'jugo natural maracuya',
            'Bebida refrescante',
            4000,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            112,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'agua-mineral-con-gas',
            'agua mineral con gas',
            'Bebida refrescante',
            2000,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            98,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'agua-mineral-sin-gas',
            'agua mineral sin gas',
            'Bebida refrescante',
            2000,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            96,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'red-bull',
            'Red Bull',
            'Bebida refrescante',
            3500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            118,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'milkshake',
            'Milkshake',
            'Bebida refrescante',
            4000,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            116,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mini-coca-220-cc',
            'mini coca 220 cc',
            'Bebida refrescante',
            1500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            126,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'crush',
            'Crush',
            'Bebida refrescante',
            2500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            137,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pap',
            'Pap',
            'Bebida refrescante',
            2500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            136,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'naranja-platano',
            'Naranja Platano',
            'Bebida refrescante',
            4000,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            118,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'red-bull-yellow',
            'Red Bull Yellow',
            'Bebida refrescante',
            3500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            110,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mini-sprite',
            'mini sprite',
            'Bebida refrescante',
            1500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            118,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mini-ginger-ale',
            'mini ginger ale',
            'Bebida refrescante',
            1500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            126,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mini-tonica',
            'mini tonica',
            'Bebida refrescante',
            1500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            99,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mini-pepsi',
            'mini pepsi',
            'Bebida refrescante',
            1500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            132,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mini-coca-zero',
            'mini coca zero',
            'Bebida refrescante',
            1500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            115,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mini-sprite-zero',
            'mini sprite zero',
            'Bebida refrescante',
            1500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            106,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mini-tonica-zero',
            'mini tonica zero',
            'Bebida refrescante',
            1500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            138,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pepsi',
            'Pepsi',
            'Bebida refrescante',
            2500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            121,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'limonsoda',
            'Limonsoda',
            'Bebida refrescante',
            2500,
            'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&h=400&fit=crop',
            '2-3 min',
            101,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cafe-americano',
            'Café americano',
            'Café de especialidad',
            2600,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            99,
            NULL,
            ARRAY['Café espresso','Agua caliente'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cafe-espresso',
            'Café espresso',
            'Café de especialidad',
            2400,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            86,
            NULL,
            ARRAY['Café espresso'],
            ARRAY[],
            ARRAY['gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cafe-espresso-doble',
            'Café espresso doble',
            'Café de especialidad',
            3500,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            82,
            NULL,
            ARRAY['Café espresso'],
            ARRAY[],
            ARRAY['gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cafe-helado',
            'Café helado',
            'Café de especialidad',
            4000,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            119,
            NULL,
            ARRAY['Café'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cafe-irlandes',
            'Café irlandes',
            'Café de especialidad',
            4000,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            89,
            NULL,
            ARRAY['Café'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cafe-nescafe',
            'Café nescafé',
            'Café de especialidad',
            2000,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            95,
            NULL,
            ARRAY['Café'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'capuccino',
            'Capuccino',
            'Café de especialidad',
            2800,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            117,
            NULL,
            ARRAY['Café espresso','Leche espumada'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'capuccino-doble',
            'Capuccino doble',
            'Café de especialidad',
            3400,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            116,
            NULL,
            ARRAY['Café espresso','Leche espumada'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'chocolate-caliente',
            'Chocolate caliente',
            'Café de especialidad',
            3000,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            102,
            NULL,
            ARRAY['Chocolate','Leche'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'chocolate-nevado',
            'chocolate nevado',
            'Café de especialidad',
            3500,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            90,
            NULL,
            ARRAY['Chocolate','Leche'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mokaccino',
            'mokaccino',
            'Café de especialidad',
            3500,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            101,
            NULL,
            ARRAY['Café'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'te-variedades',
            'Té variedades',
            'Café de especialidad',
            2000,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            112,
            NULL,
            ARRAY['Café'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'te',
            'Te',
            'Café de especialidad',
            2000,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            87,
            NULL,
            ARRAY['Café'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'capuccino-vainilla',
            'Capuccino vainilla',
            'Café de especialidad',
            3200,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            89,
            NULL,
            ARRAY['Café espresso','Leche espumada'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'capuccino-vainilla-doble',
            'capuccino vainilla doble',
            'Café de especialidad',
            3500,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            110,
            NULL,
            ARRAY['Café espresso','Leche espumada'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cortado',
            'Cortado',
            'Café de especialidad',
            2800,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            89,
            NULL,
            ARRAY['Café'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cafe-americano-doble',
            'Café americano doble',
            'Café de especialidad',
            5000,
            'https://images.unsplash.com/photo-1565288710320-b5e6a46db769?w=500&h=400&fit=crop',
            '3-4 min',
            81,
            NULL,
            ARRAY['Café espresso','Agua caliente'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'costillar-de-cerdo-a-la-chilena',
            'Costillar de cerdo a la chilena',
            'Plato principal',
            12900,
            'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&h=400&fit=crop',
            '20-25 min',
            568,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pollo-grillado-al-limon-salsa-citrica',
            'Pollo grillado al limón (salsa cítrica)',
            'Plato principal',
            9500,
            'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&h=400&fit=crop',
            '20-25 min',
            573,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'merluza-crocante',
            'Merluza crocante',
            'Merluza crocante Austral+guarnición',
            11900,
            'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&h=400&fit=crop',
            '20-25 min',
            666,
            NULL,
            ARRAY['Merluza austral','Pan rallado','Huevo','Harina','Guarnición'],
            ARRAY['Pescado','Gluten','Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'salmon-grillado-300-grs-c-guarnicion-a-eleccion',
            'Salmón grillado (300 grs) c/ guarnición a elección.',
            'Salmón a la plancha con guarnición a elección',
            13900,
            'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&h=400&fit=crop',
            '20-25 min',
            522,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY['Pescado'],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'lomo-3-pimientas',
            'Lomo 3 pimientas',
            'lomo de res, en salsa demi glace y pimientas +guarnición.',
            13500,
            'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&h=400&fit=crop',
            '20-25 min',
            768,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'lomo-a-lo-pobre',
            'Lomo a lo pobre',
            'lomo de vacuno acompañado de cebolla caramelizada huevo frito y papas fritas.',
            14900,
            'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&h=400&fit=crop',
            '20-25 min',
            740,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'lomo-grillado',
            'Lomo grillado',
            'Lomo con guarnición a elección',
            13900,
            'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&h=400&fit=crop',
            '20-25 min',
            596,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'carne-braseada-coccion-lenta',
            'Carne braseada (cocción lenta)',
            'Plato principal',
            12900,
            'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&h=400&fit=crop',
            '20-25 min',
            712,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'sopa-del-dia',
            'SOPA DEL DÍA',
            'Hasta las 16:00 hrs',
            3500,
            'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&h=400&fit=crop',
            '20-25 min',
            699,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pizza',
            'Pizza',
            'pizza casera con masa a la piedra base de pomodoro y 5 ingredientes a elección ( 2 proteínas) champiñon, aceituna, pollo, chorizo, cebollín, maíz, vacuno, tomate, cebolla caramelizada, mechada, salame, piña).',
            15900,
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop',
            '15-20 min',
            621,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pizza-individual-1898',
            'Pizza individual 1898',
            'pizza individual1898 napolitana o salame',
            7900,
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop',
            '15-20 min',
            709,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            true,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pizza-1898',
            'Pizza 1898',
            'Vacuno, pollo, tocino, salame, chorizo y tomate',
            17900,
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop',
            '15-20 min',
            829,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            true,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'extra-queso-pizza',
            'Extra queso pizza',
            'Pizza artesanal',
            4900,
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop',
            '15-20 min',
            606,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY['Lácteos','Gluten'],
            ARRAY['vegetarian'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'agregado-bbq',
            'Agregado BBQ',
            'Pizza artesanal',
            2000,
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop',
            '15-20 min',
            800,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'agregado-tocino-pizza',
            'Agregado tocino pizza',
            'Pizza artesanal',
            2500,
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop',
            '15-20 min',
            754,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY['Gluten'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'churrasco-1898',
            'Churrasco 1898',
            'Carne de res, palta, tomate, lechuga, cebolla caramelizada y champiñones salteados',
            10900,
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop',
            '10-12 min',
            598,
            NULL,
            ARRAY['Pan','Carne de res','Palta','Tomate','Lechuga','Cebolla caramelizada','Champiñones salteados'],
            ARRAY['Gluten'],
            ARRAY[],
            true,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'burguer-chada',
            'Burguer chada',
            'jugosa hamburguesa, cubierta por tocino, cebolla morada, queso cheddar, tomate y lechuga',
            10900,
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop',
            '10-12 min',
            561,
            NULL,
            ARRAY['Pan de hamburguesa','Carne de res','Tocino','Cebolla morada','Queso cheddar','Tomate','Lechuga'],
            ARRAY['Gluten','Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'el-puraquina',
            'El puraquina',
            'sabroso filete de pollo cubierto por palta, lechuga, queso fundido, champiñon, y tocino.',
            9500,
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop',
            '10-12 min',
            566,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'churrasco-italiano',
            'Churrasco italiano',
            'Sándwich gourmet',
            9200,
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop',
            '10-12 min',
            626,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'churrasco-chacarero',
            'Churrasco chacarero',
            'Sándwich gourmet',
            9000,
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop',
            '10-12 min',
            469,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'barros-luco',
            'Barros Luco',
            'Sándwich gourmet',
            8500,
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop',
            '10-12 min',
            441,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'hamburguesa-americana',
            'Hamburguesa americana',
            'lechuga, tomates, hamburguesa, BBQ, cheddar, tocino, aros de cebolla morada, mayonesa',
            9500,
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop',
            '10-12 min',
            517,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cheese-burger',
            'Cheese burger',
            'hamburguesa, cheedar, pepinillos, tocino, mayonesa',
            8500,
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop',
            '10-12 min',
            527,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-sandwich-mas-shop-ruta-s70',
            'Promo sandwich más shop ruta s70',
            'Promoción válida todos los jueves desde las 18:00 hrs. Sandwich mechada, lechuga, tomate, cebolla morada y mayonesa más shop rs70',
            9990,
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop',
            '10-12 min',
            657,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'champinones-agregado',
            'Champiñones agregado',
            'Sándwich gourmet',
            1500,
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop',
            '10-12 min',
            608,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'agregado-tomate-cebolla-lechuga',
            'Agregado, Tomate, cebolla, lechuga.',
            'Sándwich gourmet',
            1000,
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop',
            '10-12 min',
            502,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'agregado-palta',
            'Agregado palta',
            'Sándwich gourmet',
            2000,
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop',
            '10-12 min',
            540,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cheese-bacon',
            'Cheese & Bacon',
            'base de crujientes papas fritas cubierto por un manto de queso fundido y tocino frito.',
            9800,
            'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop',
            '15-20 min',
            884,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'porcion-de-papas-fritas',
            'Porcion de papas fritas',
            'crujientes papas fritas espectacular para acompañar con un shop ya sea ambar o stout.',
            5500,
            'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop',
            '15-20 min',
            813,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'salchipapas',
            'Salchipapas',
            'crujientes papas fritas acompañadas con vianesas de la mejor calidad y tradicion del sur de chile.',
            6900,
            'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop',
            '15-20 min',
            949,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'fish-chips',
            'Fish & Chips',
            'Tiras de merluza crocante, acompañados con papas rústicas, salsa provenzal y sabroso pilpil de camarones.',
            15800,
            'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop',
            '15-20 min',
            867,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tabla-beer-bar',
            'TABLA BEER BAR',
            'Cama papas fritas, verduras salteadas, Champiñones, carne braseada (cocción lenta), queso fundido y perejil!',
            23900,
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop',
            '15-20 min',
            887,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'chorrillana-1898',
            'Chorrillana 1898',
            'crujientes papas fritas cubierto con cubos de carne de res, pollo y longaniza, queso de campo, huevos de gallina fritos cebolla caramelizada y salchichas.',
            23500,
            'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop',
            '15-20 min',
            813,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            true,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'papas-bravas-para-2',
            'Papas bravas para 2',
            'Para compartir',
            8900,
            'https://images.unsplash.com/photo-1623238912680-26fc5ffb57e4?w=500&h=400&fit=crop',
            '15-20 min',
            917,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'papas-bravas-para-4',
            'papas bravas para 4',
            'Para compartir',
            12900,
            'https://images.unsplash.com/photo-1623238912680-26fc5ffb57e4?w=500&h=400&fit=crop',
            '15-20 min',
            801,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ceviche-1898-para-2',
            'Ceviche 1898 para 2',
            'Pesca del día, leche de tigre, cebolla morada, pimentón, cilantro, choclo peruano y tostadas al ajillo.',
            12500,
            'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop',
            '15-20 min',
            771,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            true,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tabla-tradicional',
            'Tabla tradicional',
            'Cama de papas fritas, lomo de res, pollo, aceitunas, pepinillos y queso.',
            23900,
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop',
            '15-20 min',
            976,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tabla-tradicional-o-chorrillana-para-2',
            'Tabla tradicional o chorrillana para 2',
            'Tablitas para 2 personas',
            12900,
            'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop',
            '15-20 min',
            839,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'empanada',
            'Empanada',
            'ave, pimentón y champiñón',
            2500,
            'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop',
            '15-20 min',
            695,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'empanada-de-mechada',
            'Empanada de mechada',
            'Empanada horneada de mechada y cebolla caramelizada',
            3500,
            'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop',
            '15-20 min',
            823,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cesar-pollo',
            'Cesar pollo',
            'Tierno mix de lechugas acompañado de cubos de pechuga de pollo, crutones, tocino, tomate cherry, aceituna y queso reggianito integrado con una cremosa salsa cesar.',
            8500,
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=400&fit=crop',
            '8-10 min',
            306,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cesar-camaron',
            'Cesar camarón',
            'suabe mix de lechugas acompañado de camarones, crutones, tocino, tomate cherry, aceituna y queso reggianito unificado con una cremosa salsa cesar.',
            9500,
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=400&fit=crop',
            '8-10 min',
            310,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY['Mariscos'],
            ARRAY['gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ensalada',
            'Ensalada',
            'Ensalada fresca',
            4500,
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=400&fit=crop',
            '8-10 min',
            318,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'helado-copa',
            'helado copa',
            'Postre delicioso',
            4000,
            'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=400&fit=crop',
            '5-8 min',
            455,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'helado-copa-triple',
            'Helado copa Triple',
            'Postre delicioso',
            5000,
            'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=400&fit=crop',
            '5-8 min',
            454,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'brownie-con-helado',
            'Brownie con helado',
            'Tibio brownie de chocolate con helado de vainilla.',
            5900,
            'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=400&fit=crop',
            '5-8 min',
            383,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'completo-italiano',
            'completo italiano',
            'Salchicha, tomate, palta y mayonesa',
            5000,
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop',
            '10-12 min',
            503,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'completo-americano',
            'completo americano',
            'Salchicha, tomate, palta, salsa americana, chucrut y mayonesa',
            5500,
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop',
            '10-12 min',
            460,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-completo-schop-heineken',
            'Promo completo + schop heineken',
            'Completo + schop heineken por $6.990',
            6990,
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop',
            '10-12 min',
            553,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'crepes-relleno-con-manjar-nueces',
            'Crepes relleno con manjar, nueces',
            'Postre delicioso',
            5300,
            'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=400&fit=crop',
            '5-8 min',
            404,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY['Frutos secos'],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'postre',
            'Postre',
            'Postre delicioso',
            6300,
            'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=400&fit=crop',
            '5-8 min',
            406,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-2x-shop-heineken',
            '2X Shop heineken',
            'Lunes a Jueves de 17:00 a 21:00 hrs',
            6000,
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
            '1-2 min',
            164,
            NULL,
            ARRAY['Malta','Lúpulo','Levadura','Agua'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-2x-shop-ruta-s70',
            '2X shop ruta s70',
            'Lunes a jueves de 17:00 a 21:00 hrs',
            9000,
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
            '1-2 min',
            145,
            NULL,
            ARRAY['Malta','Lúpulo','Levadura','Agua'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-2x-pisco-sour',
            '2x pisco sour',
            'Lunes a jueves de 17:00 a 21:00 hrs',
            8500,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            249,
            NULL,
            ARRAY['Pisco'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-2x-caipirinha',
            '2x caipirinha',
            'Lunes a jueves de 17:00 a 21:00 hrs',
            7400,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            249,
            NULL,
            ARRAY['Cachaça','Limón'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-2x-ramazzotti',
            '2x Ramazzotti',
            'Lunes a jueves de 17:00 a 21:00 hrs',
            8990,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            209,
            NULL,
            ARRAY['Licor premium'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-2x-mojito-frutal',
            '2x Mojito frutal',
            'Lunes a jueves de 17:00 a 21:00 hrs',
            10400,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            215,
            NULL,
            ARRAY['Ron','Limón','Menta'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-2x-ruso-blanco',
            '2X Ruso blanco',
            'Lunes a jueves de 17:00 a 21:00 hrs',
            9990,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            207,
            NULL,
            ARRAY['Licor premium'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-2x-tequila-margarita',
            '2X Tequila margarita',
            'Lunes a jueves de 17:00 a 21:00 hrs',
            9200,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '3-5 min',
            192,
            NULL,
            ARRAY['Tequila','Limón','Triple sec'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-2x-pisco-mistral-35',
            '2X pisco mistral 35',
            'activo día del pisco',
            7300,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            148,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-2x-pisco-alto-del-carmen',
            '2X Pisco alto del carmen',
            'Activo día del pisco',
            7300,
            'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&h=400&fit=crop',
            '1 min',
            108,
            NULL,
            ARRAY['Ingredientes frescos'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tomahawk-lomo-vetado',
            'Tomahawk de lomo vetado',
            'Jugoso Tomahawk de lomo vetado de 700 grs, acompañado de tomates cherry glaseados, vegetales de estación asados, papas a las finas hierbas y nuestras salsas de merkén y chimichurri.',
            24500,
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop',
            '30-35 min',
            1200,
            NULL,
            ARRAY['Lomo vetado Tomahawk','Tomates cherry','Romero','Ajo','Vegetales de estación','Papas','Merkén','Chimichurri'],
            ARRAY[],
            ARRAY[],
            true,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'anticuchos-parrilleros',
            'Anticuchos Parrilleros',
            'Anticuchos grillados de res, cerdo y longaniza Llanquihue de 1000 grs, acompañados de tomates cherry glaseados, papas a las finas hierbas, salsa de ajo con cilantro, tostadas y chimichurri.',
            26500,
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop',
            '25-30 min',
            1500,
            NULL,
            ARRAY['Carne de res','Carne de cerdo','Longaniza Llanquihue','Tomates cherry','Papas','Ajo','Cilantro','Pan tostado'],
            ARRAY['Gluten'],
            ARRAY[],
            true,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pastel-jaiba-500',
            'Pastel de Jaiba 500 grs',
            'Delicioso pastel de jaiba gratinado con queso mantecoso, preparado con jaiba fresca y nuestra receta tradicional.',
            12500,
            'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&h=400&fit=crop',
            '20-25 min',
            650,
            NULL,
            ARRAY['Jaiba fresca','Queso mantecoso','Pan rallado','Crema','Vino blanco','Cebolla','Ajo'],
            ARRAY['Mariscos','Lácteos','Gluten'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ravioles-salmon',
            'Ravioles relleno Salmón',
            'Ravioles rellenos de salmón en suave salsa de camarones y tomate cherry.',
            14900,
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=400&fit=crop',
            '18-22 min',
            700,
            NULL,
            ARRAY['Pasta fresca','Salmón','Camarones','Tomate cherry','Crema','Vino blanco','Albahaca'],
            ARRAY['Pescado','Mariscos','Gluten','Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'crudo',
            'Crudo',
            'Suave corte de res, cebolla morada, pepinillo y ají verde en brunoise, cilantro, gajos de limón, tostadas y salsa de sour cream de la casa.',
            11900,
            'https://images.unsplash.com/photo-1626790291085-babaee0abef8?w=500&h=400&fit=crop',
            '10-12 min',
            450,
            NULL,
            ARRAY['Carne de res','Cebolla morada','Pepinillo','Ají verde','Cilantro','Limón','Pan tostado','Sour cream'],
            ARRAY['Gluten','Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ramazzotti-violeta',
            'Ramazzotti violeta',
            'Refrescante cóctel con Ramazzotti, notas florales de violeta y un toque cítrico.',
            6500,
            'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop',
            '3-5 min',
            180,
            NULL,
            ARRAY['Ramazzotti','Jarabe de violeta','Limón','Agua tónica'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tetera-compartir',
            'Tetera para compartir',
            'Tetera de 750 ml, consultar variedades disponibles.',
            4500,
            'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=500&h=400&fit=crop',
            '5-7 min',
            5,
            NULL,
            ARRAY['Té premium','Agua purificada'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tetera-pequena',
            'Tetera pequeña',
            'Tetera de 500 ml, consultar variedades disponibles.',
            2500,
            'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&h=400&fit=crop',
            '5-7 min',
            5,
            NULL,
            ARRAY['Té premium','Agua purificada'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cafe-tradicional',
            'Café tradicional',
            'Café de grano arábica 100% preparado al momento.',
            1800,
            'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=400&fit=crop',
            '3-4 min',
            5,
            NULL,
            ARRAY['Café arábica','Agua'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'expresso',
            'Expresso',
            'Shot de café expresso con crema dorada perfecta.',
            2400,
            'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&h=400&fit=crop',
            '2-3 min',
            3,
            NULL,
            ARRAY['Café expresso'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'expresso-doble',
            'Expresso doble',
            'Doble shot de café expresso para los amantes del café intenso.',
            3500,
            'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=400&fit=crop',
            '2-3 min',
            6,
            NULL,
            ARRAY['Café expresso doble'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'americano',
            'Americano',
            'Café expresso diluido con agua caliente, suave y aromático.',
            2800,
            'https://images.unsplash.com/photo-1521127474489-d524412fd439?w=500&h=400&fit=crop',
            '3-4 min',
            5,
            NULL,
            ARRAY['Café expresso','Agua caliente'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ristretto',
            'Ristretto',
            'Shot de café concentrado, más intenso que el expresso tradicional.',
            2200,
            'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=500&h=400&fit=crop',
            '2-3 min',
            2,
            NULL,
            ARRAY['Café ristretto'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mocaccino',
            'Mocaccino',
            'Deliciosa mezcla de café expresso, chocolate y leche espumosa.',
            3200,
            'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&h=400&fit=crop',
            '5-6 min',
            320,
            NULL,
            ARRAY['Café expresso','Chocolate','Leche','Crema batida'],
            ARRAY['Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'nutella-coffee',
            'Nutella Coffe',
            'Café con deliciosa crema de Nutella y leche espumosa.',
            3900,
            'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?w=500&h=400&fit=crop',
            '5-6 min',
            380,
            NULL,
            ARRAY['Café expresso','Nutella','Leche','Crema batida'],
            ARRAY['Lácteos','Frutos secos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'infusion-menta-jengibre',
            'Infusión menta jengibre',
            'Reconfortante infusión natural de menta fresca y jengibre.',
            1800,
            'https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?w=500&h=400&fit=crop',
            '5-7 min',
            5,
            NULL,
            ARRAY['Menta fresca','Jengibre','Agua'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cafe-late',
            'Café Late',
            'Café expresso con abundante leche vaporizada.',
            3200,
            'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=500&h=400&fit=crop',
            '4-5 min',
            150,
            NULL,
            ARRAY['Café expresso','Leche vaporizada'],
            ARRAY['Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'afogato',
            'Afogato',
            'Porción de helado de vainilla con una carga de café de grano.',
            3200,
            'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=400&fit=crop',
            '3-4 min',
            250,
            NULL,
            ARRAY['Helado de vainilla','Café expresso'],
            ARRAY['Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'caja-te-infusiones',
            'Caja Té Infusiones Variedad',
            'Selección premium de tés e infusiones para compartir.',
            8000,
            'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=500&h=400&fit=crop',
            '5-7 min',
            10,
            NULL,
            ARRAY['Variedad de tés','Infusiones naturales'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'lavazza-sachet',
            'Lavazza Sachet',
            'Café Lavazza premium en presentación individual.',
            2300,
            'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=500&h=400&fit=crop',
            '3-4 min',
            5,
            NULL,
            ARRAY['Café Lavazza'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'jugo-frambuesa',
            'Jugo Frambuesa',
            'Refrescante jugo natural de frambuesas frescas.',
            3600,
            'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&h=400&fit=crop',
            '3-5 min',
            120,
            NULL,
            ARRAY['Frambuesas','Agua','Azúcar'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'limonada',
            'Limonada',
            'Clásica limonada casera con limones frescos.',
            3900,
            'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=500&h=400&fit=crop',
            '5 min',
            100,
            NULL,
            ARRAY['Limones frescos','Agua','Azúcar','Hielo'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'agua-mineral-gas',
            'Agua mineral c/gas',
            'Agua mineral con gas, refrescante y natural.',
            2200,
            'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&h=400&fit=crop',
            '1 min',
            NULL,
            NULL,
            ARRAY['Agua mineral carbonatada'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ginger-ale',
            'Ginger Ale',
            'Bebida gaseosa de jengibre, refrescante y suave.',
            2200,
            'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&h=400&fit=crop',
            '1 min',
            120,
            NULL,
            ARRAY['Ginger Ale'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'jugo-mango',
            'Jugo Mango',
            'Delicioso jugo natural de mango maduro.',
            3200,
            'https://images.unsplash.com/photo-1546173159-315724a31696?w=500&h=400&fit=crop',
            '3-5 min',
            130,
            NULL,
            ARRAY['Mango','Agua','Azúcar'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'jugo-pina',
            'Jugo Piña',
            'Refrescante jugo natural de piña tropical.',
            3200,
            'https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?w=500&h=400&fit=crop',
            '3-5 min',
            120,
            NULL,
            ARRAY['Piña','Agua','Azúcar'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'coca-zero',
            'Coca Zero',
            'Coca-Cola Zero sin azúcar.',
            2200,
            'https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?w=500&h=400&fit=crop',
            '1 min',
            NULL,
            NULL,
            ARRAY['Coca-Cola Zero'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'agua-tonica',
            'Agua tónica',
            'Agua tónica premium para cócteles o sola.',
            2200,
            'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop',
            '1 min',
            80,
            NULL,
            ARRAY['Agua tónica'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'coca-cola-220',
            'Coca-cola 220 cc',
            'Coca-Cola en presentación personal de 220cc',
            1500,
            'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&h=400&fit=crop',
            '1 min',
            90,
            NULL,
            ARRAY['Coca-Cola'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'coca-zero-220',
            'Coca zero 220 cc',
            'Coca-Cola Zero en presentación personal de 220cc',
            1500,
            'https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?w=500&h=400&fit=crop',
            '1 min',
            NULL,
            NULL,
            ARRAY['Coca-Cola Zero'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'sprite-220',
            'Sprite 220 cc',
            'Sprite en presentación personal de 220cc',
            1500,
            'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&h=400&fit=crop',
            '1 min',
            90,
            NULL,
            ARRAY['Sprite'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pepsi-220',
            'Pepsi 220 cc',
            'Pepsi en presentación personal de 220cc',
            1500,
            'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&h=400&fit=crop',
            '1 min',
            90,
            NULL,
            ARRAY['Pepsi'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'limonada-frambuesa',
            'Limonada Frambuesa',
            'Limonada con delicioso toque de frambuesas frescas',
            4200,
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&h=400&fit=crop',
            '5-7 min',
            120,
            NULL,
            ARRAY['Limones','Frambuesas','Agua','Azúcar'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'jugo-frutilla',
            'Jugo de frutilla',
            'Jugo natural de frutillas frescas y dulces',
            3600,
            'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=500&h=400&fit=crop',
            '3-5 min',
            110,
            NULL,
            ARRAY['Frutillas','Agua','Azúcar'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'jugo-berries',
            'Jugo de Berries',
            'Frutilla, Arándanos y Frambuesas',
            3600,
            'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&h=400&fit=crop',
            '5 min',
            130,
            NULL,
            ARRAY['Frutillas','Arándanos','Frambuesas','Agua','Azúcar'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'sprite-cero',
            'Sprite Cero',
            'Sprite Zero sin azúcar',
            2200,
            'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&h=400&fit=crop',
            '1 min',
            NULL,
            NULL,
            ARRAY['Sprite Zero'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'manantial',
            'Manantial',
            'Agua sin Hielo',
            0,
            'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&h=400&fit=crop',
            '1 min',
            NULL,
            NULL,
            ARRAY['Agua purificada'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cordillerano',
            'Cordillerano',
            'Agua con hielo',
            0,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '1 min',
            NULL,
            NULL,
            ARRAY['Agua purificada','Hielo'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ginger-ale-220',
            'Ginger Ale 220cc',
            'Ginger Ale en presentación personal de 220cc',
            1500,
            'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&h=400&fit=crop',
            '1 min',
            80,
            NULL,
            ARRAY['Ginger Ale'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tonica-220',
            'Tonica 220cc',
            'Agua tónica en presentación personal de 220cc',
            1500,
            'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop',
            '1 min',
            50,
            NULL,
            ARRAY['Agua tónica'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'jardin-el-arbol',
            'Jardín el Árbol',
            'Volcán de chocolate 19% recubierto de azúcar glass, acompañado de mermelada de guinda, mini macarons, crocante de chocolate bitter, frutos rojos y sobre este, helado de vainilla.',
            6200,
            'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&h=400&fit=crop',
            '15-20 min',
            680,
            NULL,
            ARRAY['Chocolate 19%','Mermelada de guinda','Macarons','Chocolate bitter','Frutos rojos','Helado de vainilla'],
            ARRAY['Lácteos','Gluten','Huevos','Frutos secos'],
            ARRAY[],
            true,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pastel',
            'Pastel',
            'Delicioso pastel del día, consultar variedades disponibles',
            4400,
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop',
            '5 min',
            450,
            NULL,
            ARRAY['Harina','Azúcar','Huevos','Mantequilla','Leche','Sabor del día'],
            ARRAY['Lácteos','Gluten','Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tiramisu',
            'Tiramisú',
            'Clásico postre italiano con capas de bizcocho, café y crema de mascarpone',
            4300,
            'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=400&fit=crop',
            '5 min',
            480,
            NULL,
            ARRAY['Bizcocho','Café expresso','Mascarpone','Cacao','Azúcar','Huevos'],
            ARRAY['Lácteos','Gluten','Huevos'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'copa-helado-infantil',
            'Copa de Helado Infantil',
            'Copa de helado especial para niños con toppings divertidos',
            4000,
            'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&h=400&fit=crop',
            '3-5 min',
            320,
            NULL,
            ARRAY['Helado','Salsa de chocolate','Chispas de colores','Galletas'],
            ARRAY['Lácteos','Gluten'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'crepes-suzette',
            'Crêpes suzette',
            'Crêpes marinados en salsa de naranja y flambeado con Whisky.',
            4100,
            'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500&h=400&fit=crop',
            '10-12 min',
            420,
            NULL,
            ARRAY['Crêpes','Naranja','Whisky','Mantequilla','Azúcar'],
            ARRAY['Lácteos','Gluten','Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'panqueques-celestinos',
            'Panqueques Celestinos',
            'Panqueques con manjar y nueces, un clásico irresistible',
            4900,
            'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=500&h=400&fit=crop',
            '8-10 min',
            520,
            NULL,
            ARRAY['Panqueques','Manjar','Nueces','Azúcar glass'],
            ARRAY['Lácteos','Gluten','Huevos','Frutos secos'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'copa-helado-3-sabores',
            'Copa de Helado 3 sabores',
            'Tres bolas de helado a elección con salsa y toppings',
            4500,
            'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=400&fit=crop',
            '3-5 min',
            380,
            NULL,
            ARRAY['Helado (3 sabores)','Salsa','Toppings variados'],
            ARRAY['Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'leche-asada',
            'Leche asada',
            'Tradicional postre chileno con caramelo dorado',
            4200,
            'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=400&fit=crop',
            '5 min',
            280,
            NULL,
            ARRAY['Leche','Huevos','Azúcar','Vainilla','Caramelo'],
            ARRAY['Lácteos','Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'volcan-chocolate',
            'Volcán de chocolate',
            'Volcán de chocolate 19% recubierto de azúcar glass, acompañado de mermelada de guinda, crocante de chocolate bitter, frutos rojos y sobre este, helado de vainilla.',
            4900,
            'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=400&fit=crop',
            '12-15 min',
            580,
            NULL,
            ARRAY['Chocolate 19%','Mermelada de guinda','Chocolate bitter','Frutos rojos','Helado de vainilla'],
            ARRAY['Lácteos','Gluten','Huevos'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'macarons-unidad',
            'Macarons Unidad',
            'Sabores disponibles: Vainilla, limón, frutos rojos, pistacho, brownie y caramelo.',
            990,
            'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500&h=400&fit=crop',
            '2 min',
            70,
            NULL,
            ARRAY['Almendra','Azúcar glass','Clara de huevo','Relleno según sabor'],
            ARRAY['Frutos secos','Huevos'],
            ARRAY['gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'macarons-variedad',
            'Macarons Variedad',
            'Surtido de macarons (6 unidades) en base de almendra con sabor a vainilla, limón, frutos rojos, pistacho, brownie y caramelo.',
            5600,
            'https://images.unsplash.com/photo-1567432284385-4b0131bdab95?w=500&h=400&fit=crop',
            '5 min',
            420,
            NULL,
            ARRAY['Almendra','Azúcar glass','Clara de huevo','Rellenos variados'],
            ARRAY['Frutos secos','Huevos'],
            ARRAY['gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'galletas-brownie-100',
            'Galletas de Brownie 100 grms',
            'GALLETAS CHICAS',
            2900,
            'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&h=400&fit=crop',
            '2 min',
            280,
            NULL,
            ARRAY['Chocolate','Mantequilla','Harina','Huevos','Azúcar'],
            ARRAY['Lácteos','Gluten','Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'galletas-brownie-200',
            'Galletas de Brownie 200 grms',
            'GALLETAS GRANDES',
            3900,
            'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=400&fit=crop',
            '2 min',
            560,
            NULL,
            ARRAY['Chocolate','Mantequilla','Harina','Huevos','Azúcar'],
            ARRAY['Lácteos','Gluten','Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cheesecake-oreo',
            'Cheesecake Oreo',
            'Cremoso cheesecake con base y trozos de galletas Oreo',
            3200,
            'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=500&h=400&fit=crop',
            '5 min',
            450,
            NULL,
            ARRAY['Queso crema','Galletas Oreo','Crema','Azúcar','Gelatina'],
            ARRAY['Lácteos','Gluten'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'brownie-helado',
            'Brownie con Helado',
            'Brownie de chocolate bitter acompañado de helado a elección, decorado con crema chantilly y salsa de chocolate.',
            4500,
            'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=400&fit=crop',
            '7-10 min',
            620,
            NULL,
            ARRAY['Brownie de chocolate','Helado','Crema chantilly','Salsa de chocolate'],
            ARRAY['Lácteos','Gluten','Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'oferta-capuccino-torta',
            'OFERTA en horario de 16:00 a 19:00 hrs',
            'Capuccino o cortado+torta',
            6400,
            'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&h=400&fit=crop',
            '7-10 min',
            550,
            NULL,
            ARRAY['Café','Leche','Torta del día'],
            ARRAY['Lácteos','Gluten','Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'desayuno-continental',
            'Desayuno continental',
            'Café grano Hausbrandt, té o chocolate caliente, jugo naranja, tostadas, mantequilla, mermelada, palta, pastel de la casa.',
            7900,
            'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&h=400&fit=crop',
            '10-12 min',
            650,
            NULL,
            ARRAY['Café/Té/Chocolate','Jugo de naranja','Pan','Mantequilla','Mermelada','Palta','Pastel'],
            ARRAY['Lácteos','Gluten'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'barros-jarpa-combo',
            'Barros jarpa + té o café lavazza',
            'Clásico sándwich de jamón y queso con bebida caliente',
            4000,
            'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=400&fit=crop',
            '5-7 min',
            450,
            NULL,
            ARRAY['Pan de molde','Jamón','Queso','Café/Té'],
            ARRAY['Lácteos','Gluten'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tostadas-palta-combo',
            'Tostadas con palta + te o cafe',
            'Tostadas crujientes con palta fresca y bebida caliente',
            5500,
            'https://images.unsplash.com/photo-1603046891742-cfb0d2f1f4b5?w=500&h=400&fit=crop',
            '5-6 min',
            380,
            NULL,
            ARRAY['Pan tostado','Palta','Sal','Café/Té'],
            ARRAY['Gluten'],
            ARRAY['vegetarian'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'huevos-revueltos-queso',
            'Huevos revueltos con queso',
            'Cremosos huevos revueltos con queso derretido',
            5500,
            'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&h=400&fit=crop',
            '7-8 min',
            420,
            NULL,
            ARRAY['Huevos','Queso','Mantequilla','Pan'],
            ARRAY['Huevos','Lácteos','Gluten'],
            ARRAY['vegetarian'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'huevos-revueltos-tocino',
            'Huevos revueltos con tocino',
            'Huevos revueltos acompañados de tocino crujiente',
            6500,
            'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&h=400&fit=crop',
            '8-10 min',
            520,
            NULL,
            ARRAY['Huevos','Tocino','Mantequilla','Pan tostado'],
            ARRAY['Huevos','Lácteos','Gluten'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'selladito-doble-queso',
            'Selladito doble queso',
            'Sándwich sellado con doble porción de queso derretido',
            3500,
            'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=400&fit=crop',
            '5 min',
            380,
            NULL,
            ARRAY['Pan de molde','Queso (doble porción)'],
            ARRAY['Lácteos','Gluten'],
            ARRAY['vegetarian'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'selladito-barros-jarpa',
            'Selladito barro jarpa',
            'Sándwich sellado de jamón y queso',
            4500,
            'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=400&fit=crop',
            '5 min',
            420,
            NULL,
            ARRAY['Pan de molde','Jamón','Queso'],
            ARRAY['Lácteos','Gluten'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tostadas-palta',
            'Tostadas con palta',
            'Tostadas crujientes con abundante palta fresca',
            5000,
            'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=500&h=400&fit=crop',
            '5 min',
            320,
            NULL,
            ARRAY['Pan tostado','Palta','Sal','Limón'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'omelette-tradicional',
            'Omelette tradicional',
            'Omelette esponjoso con queso y jamón',
            5500,
            'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=500&h=400&fit=crop',
            '8-10 min',
            480,
            NULL,
            ARRAY['Huevos','Queso','Jamón','Pan tostado'],
            ARRAY['Huevos','Lácteos','Gluten'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'crema-sopa-dia',
            'Crema o Sopa del día',
            'Deliciosa crema o sopa casera, consultar variedad del día',
            4400,
            'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=400&fit=crop',
            '5-7 min',
            250,
            NULL,
            ARRAY['Vegetales de estación','Caldo de verduras','Crema','Especias'],
            ARRAY['Variable'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'camarones-ajillo-pil-pil',
            'Camarones al Ajillo o al Pil Pil',
            'Camarones salteados en aceite de oliva con ajo y guindillas',
            7900,
            'https://images.unsplash.com/photo-1565299715199-866c917206bb?w=500&h=400&fit=crop',
            '12-15 min',
            380,
            NULL,
            ARRAY['Camarones','Ajo','Aceite de oliva','Guindillas','Perejil','Pan'],
            ARRAY['Mariscos','Gluten'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pastel-jaiba-250',
            'Pastel de Jaiba 250 grs',
            'porción 250grs, pastel de jaiba gratinado con queso mantecoso',
            7500,
            'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=500&h=400&fit=crop',
            '15-18 min',
            320,
            NULL,
            ARRAY['Jaiba','Queso mantecoso','Pan rallado','Crema','Cebolla'],
            ARRAY['Mariscos','Lácteos','Gluten'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'empanaditas-queso',
            '6 empanaditas fritas Queso cóctel',
            '6 unid de empanaditas fritas',
            4900,
            'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=400&fit=crop',
            '8-10 min',
            480,
            NULL,
            ARRAY['Masa de empanada','Queso','Aceite'],
            ARRAY['Lácteos','Gluten'],
            ARRAY['vegetarian'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'empanaditas-camaron-queso',
            '6 empanaditas fritas Camarón-Queso cóctel',
            '6 unid empanaditas fritas',
            5900,
            'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=400&fit=crop',
            '8-10 min',
            520,
            NULL,
            ARRAY['Masa de empanada','Camarones','Queso','Aceite'],
            ARRAY['Mariscos','Lácteos','Gluten'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ceviche-salmon',
            'Ceviche de Salmón',
            'Salmón, cebolla morada, manzanas verdes, paltas, pimentón, semilla de sesamó, cilantro, jengibre, sal, limón merquén, leche de tigre',
            6900,
            'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=500&h=400&fit=crop',
            '15 min',
            280,
            NULL,
            ARRAY['Salmón','Cebolla morada','Manzana verde','Palta','Pimentón','Sésamo','Cilantro','Jengibre','Leche de tigre'],
            ARRAY['Pescado','Sésamo'],
            ARRAY['gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ceviche-compartir-salmon',
            'Ceviche para Compartir Salmón',
            'Porción grande de ceviche de salmón para compartir',
            12500,
            'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=500&h=400&fit=crop',
            '18 min',
            560,
            NULL,
            ARRAY['Salmón','Cebolla morada','Manzana verde','Palta','Pimentón','Sésamo','Cilantro','Jengibre','Leche de tigre'],
            ARRAY['Pescado','Sésamo'],
            ARRAY['gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ceviche-compartir-camaron-salmon',
            'Ceviche para Compartir Camarón Salmón',
            'Ceviche mixto de camarón y salmón para compartir',
            13900,
            'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=500&h=400&fit=crop',
            '18 min',
            620,
            NULL,
            ARRAY['Camarones','Salmón','Cebolla morada','Manzana verde','Palta','Cilantro','Leche de tigre'],
            ARRAY['Mariscos','Pescado','Sésamo'],
            ARRAY['gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ceviche-champinon-individual',
            'Ceviche champiñon individual',
            'Ceviche vegetariano de champiñones marinados',
            5900,
            'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=500&h=400&fit=crop',
            '12 min',
            180,
            NULL,
            ARRAY['Champiñones','Cebolla morada','Pimentón','Cilantro','Limón','Aceite de oliva'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'plateada-braseada',
            'Plateada braseada con pastelera de choclo',
            'Plateada de la zona, en cocción lenta con cerveza artesanal ambar',
            16500,
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop',
            '25-30 min',
            780,
            NULL,
            ARRAY['Plateada','Cerveza artesanal','Choclo','Mantequilla','Especias'],
            ARRAY['Lácteos'],
            ARRAY[],
            true,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ravioles-pollo',
            'Ravioles relleno Pollo',
            'Salsa de Champiñon',
            12900,
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=400&fit=crop',
            '18-20 min',
            650,
            NULL,
            ARRAY['Pasta fresca','Pollo','Champiñones','Crema','Vino blanco'],
            ARRAY['Gluten','Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'salmon-gratinado',
            'Salmón gratinado',
            'Salmón con queso gratinado, cebolla caramelizada, y tomate confitado acompañado de guarnición a elección',
            15500,
            'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=400&fit=crop',
            '20-25 min',
            680,
            NULL,
            ARRAY['Salmón','Queso gratinado','Cebolla caramelizada','Tomate confitado'],
            ARRAY['Pescado','Lácteos'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'risotto-di-mare',
            'Risotto Di Mare',
            'Arroz arbóreo con camarones, champiñones y tomate cherry',
            12500,
            'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&h=400&fit=crop',
            '20-22 min',
            620,
            NULL,
            ARRAY['Arroz arbóreo','Camarones','Champiñones','Tomate cherry','Vino blanco','Parmesano'],
            ARRAY['Mariscos','Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'osobuco-braseado',
            'Osobuco Braseado',
            'Osobuco al carménère acompañado de risotto con champiñones.',
            14000,
            'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&h=400&fit=crop',
            '25-30 min',
            720,
            NULL,
            ARRAY['Osobuco','Vino carménère','Risotto','Champiñones','Verduras'],
            ARRAY['Lácteos'],
            ARRAY[],
            true,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'lasagna-bolonesa',
            'Lasagna a la Boloñesa',
            'Clásica lasaña con salsa boloñesa y bechamel',
            9900,
            'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&h=400&fit=crop',
            '20-25 min',
            750,
            NULL,
            ARRAY['Pasta','Carne molida','Salsa de tomate','Bechamel','Queso'],
            ARRAY['Gluten','Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'fetuccinis',
            'Fetuccinis',
            'Consultar al garzón salsas disponibles (pesto, champiñon, ave champiñon o pomodoro) camarón tiene valor adicional 3900 c/u',
            9900,
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=400&fit=crop',
            '15-18 min',
            580,
            NULL,
            ARRAY['Pasta fetuccini','Salsa a elección'],
            ARRAY['Gluten','Variable según salsa'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'lomo-premium-res',
            'Lomo premium de Res',
            'Lomo de Res con Guarnición a elección',
            13900,
            'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=400&fit=crop',
            '15-20 min',
            650,
            NULL,
            ARRAY['Lomo de res','Guarnición a elección'],
            ARRAY[],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'suprema-ave-peruana',
            'Suprema de ave con salsa peruana',
            'Corte de Ave en salsa peruana con Guarnición a elección.',
            9900,
            'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&h=400&fit=crop',
            '15-18 min',
            480,
            NULL,
            ARRAY['Pechuga de pollo','Salsa peruana','Guarnición a elección'],
            ARRAY[],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'salmon-plancha',
            'Salmón',
            'Salmón con salsa de alcaparra y toques ácidos, a la plancha o a la mantequilla con Guarnición a elección.',
            12500,
            'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=400&fit=crop',
            '12-15 min',
            520,
            NULL,
            ARRAY['Salmón','Alcaparras','Limón','Guarnición a elección'],
            ARRAY['Pescado'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'chuleta-kassler',
            'Chuleta Kassler ahumada',
            'Jugosa chuleta de cerdo ahumada con guarnición a elección',
            11900,
            'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500&h=400&fit=crop',
            '15-18 min',
            580,
            NULL,
            ARRAY['Chuleta de cerdo ahumada','Guarnición a elección'],
            ARRAY[],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'lomo-res-pobre',
            'Lomo premium de Res a lo pobre',
            'Lomo de res con huevos fritos, papas fritas y cebolla frita',
            16900,
            'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=400&fit=crop',
            '20-25 min',
            980,
            NULL,
            ARRAY['Lomo de res','Huevos','Papas fritas','Cebolla frita'],
            ARRAY['Huevos'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'no-lo-se',
            'No lo sé',
            'Nuggets con papas fritas.',
            6800,
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&h=400&fit=crop',
            '10-12 min',
            450,
            NULL,
            ARRAY['Nuggets de pollo','Papas fritas'],
            ARRAY['Gluten'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'me-da-igual',
            'Me da igual',
            'Salchichas con papas fritas.',
            6800,
            'https://images.unsplash.com/photo-1619740455993-9d701365a757?w=500&h=400&fit=crop',
            '10-12 min',
            480,
            NULL,
            ARRAY['Salchichas','Papas fritas'],
            ARRAY[],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'hamburguesa-infantil',
            'Hamburguesa Infantil',
            'Hamburguesa, queso cheddar y lechuga.',
            7200,
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop',
            '12-15 min',
            520,
            NULL,
            ARRAY['Hamburguesa','Queso cheddar','Lechuga','Pan','Papas fritas'],
            ARRAY['Gluten','Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'plato-rio-tolten',
            'Plato Río Toltén',
            'Mix de hojas verdes, finas láminas de salmón con toques ahumado, alcaparras, queso fresco, crocante de papas, acompañado de suave dressing de perejil.',
            8500,
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop',
            '10-12 min',
            380,
            NULL,
            ARRAY['Mix hojas verdes','Salmón ahumado','Alcaparras','Queso fresco','Papas crocantes','Dressing de perejil'],
            ARRAY['Pescado','Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ensalada-cesar',
            'Ensalada César',
            'Mix de hojas verdes, pollo grillé, tomates cherry, queso parmesano, crutones y aderezo césar.',
            7900,
            'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&h=400&fit=crop',
            '10-12 min',
            420,
            NULL,
            ARRAY['Lechuga romana','Pollo grillé','Tomates cherry','Parmesano','Crutones','Aderezo césar'],
            ARRAY['Lácteos','Gluten','Huevos'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'plato-vegetariano',
            'Plato Vegetariano',
            'Mix hojas verdes, quesillo, tomate cherry, mix de frutos secos, cebolla morada, porotos negros, palta en rosa y semillas de sésamo.',
            6900,
            'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=400&fit=crop',
            '10 min',
            380,
            NULL,
            ARRAY['Mix hojas verdes','Quesillo','Tomate cherry','Frutos secos','Cebolla morada','Porotos negros','Palta','Sésamo'],
            ARRAY['Lácteos','Frutos secos','Sésamo'],
            ARRAY['vegetarian'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ensalada-casa',
            'Ensalada de la Casa',
            'Mix hojas verdes, vegetales de la estación, Palta.',
            4900,
            'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500&h=400&fit=crop',
            '8 min',
            250,
            NULL,
            ARRAY['Mix hojas verdes','Vegetales de estación','Palta'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'sorrentinos-pesto',
            'Sorrentinos salsa pesto o champiñones',
            'Relleno con queso crema y vegetales de la estación..',
            9000,
            'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&h=400&fit=crop',
            '15-18 min',
            520,
            NULL,
            ARRAY['Sorrentinos','Queso crema','Vegetales','Salsa pesto o champiñones'],
            ARRAY['Gluten','Lácteos','Frutos secos'],
            ARRAY['vegetarian'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ceviche-champinon-compartir',
            'Ceviche Champiñon compartir',
            'Ceviche vegetariano de champiñones para compartir',
            8900,
            'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=500&h=400&fit=crop',
            '12 min',
            280,
            NULL,
            ARRAY['Champiñones','Cebolla morada','Pimentón','Cilantro','Limón','Aceite de oliva'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ensalada-cesar-camaron',
            'Ensalada Cesar Camarón',
            'Mix de hojas verdes, camarones al ajillo, tomates cherry, queso parmesano, crutones y aderezo césar.',
            8900,
            'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&h=400&fit=crop',
            '12-15 min',
            450,
            NULL,
            ARRAY['Lechuga romana','Camarones al ajillo','Tomates cherry','Parmesano','Crutones','Aderezo césar'],
            ARRAY['Mariscos','Lácteos','Gluten','Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'hamburguesa-golosa',
            'Hamburguesa Golosa',
            'Lechuga, tomate, pepinillo, hamburguesa, tocino, queso cheddar, cebolla caramelizada y huevo.',
            8900,
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop',
            '12-15 min',
            780,
            NULL,
            ARRAY['Pan brioche','Hamburguesa','Tocino','Queso cheddar','Huevo','Lechuga','Tomate','Pepinillo','Cebolla caramelizada'],
            ARRAY['Gluten','Lácteos','Huevos'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'hamburguesa-arbol',
            'Hamburguesa El Árbol',
            'Lechuga, tomate, hamburguesa, queso cheddar, cebolla caramelizada, champiñones salteados y crocante de papas.',
            8900,
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop',
            '12-15 min',
            720,
            NULL,
            ARRAY['Pan brioche','Hamburguesa','Queso cheddar','Lechuga','Tomate','Cebolla caramelizada','Champiñones','Papas crocantes'],
            ARRAY['Gluten','Lácteos'],
            ARRAY[],
            true,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'hamburguesa-italiana',
            'Hamburguesa Italiana',
            'Hamburguesa, tomate, palta y mayonesa.',
            8500,
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop',
            '10-12 min',
            650,
            NULL,
            ARRAY['Pan brioche','Hamburguesa','Tomate','Palta','Mayonesa'],
            ARRAY['Gluten','Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'sandwich-italiano',
            'Sándwich Italiano tradicional',
            'Churrasco, tomate, palta y mayonesa.',
            7900,
            'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=500&h=400&fit=crop',
            '8-10 min',
            620,
            NULL,
            ARRAY['Pan amasado','Churrasco','Tomate','Palta','Mayonesa'],
            ARRAY['Gluten','Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'trio-carnes-quesos',
            'Trio de carnes con quesos',
            'Salteado de res, pollo, cerdo con queso mantecoso, champiñones salteados y queso cheddar fundido en cama de papas fritas.',
            26500,
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop',
            '20-25 min',
            1450,
            NULL,
            ARRAY['Res','Pollo','Cerdo','Queso mantecoso','Queso cheddar','Champiñones','Papas fritas'],
            ARRAY['Lácteos'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tabla-grande-pichanga',
            'Tabla grande Pichanga',
            'Salteado de res, pollo y longaniza ahumada, con palta, tomate, cebolla perla, pepinillos, aceitunas, queso mantecoso con cama de papas fritas.',
            24500,
            'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=500&h=400&fit=crop',
            '20-25 min',
            1380,
            NULL,
            ARRAY['Res','Pollo','Longaniza','Palta','Tomate','Cebolla','Pepinillos','Aceitunas','Queso','Papas fritas'],
            ARRAY['Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tabla-pequena-pichanga',
            'Tabla pequeña Pichanga',
            'Salteado de res, pollo y longaniza ahumada conpalta, tomate, cebolla perla, pepinillos, aceitunas, queso mantecoso con cama de papas fritas.',
            16900,
            'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=500&h=400&fit=crop',
            '15-20 min',
            920,
            NULL,
            ARRAY['Res','Pollo','Longaniza','Palta','Tomate','Cebolla','Pepinillos','Aceitunas','Queso','Papas fritas'],
            ARRAY['Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'papas-bravas',
            'Papas Bravas c salsa picante',
            'Papas salteadas con base de salsa bechamel, pasta de aji ahumado, merquén, parmesano y tocino bacon.',
            9900,
            'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop',
            '12-15 min',
            680,
            3,
            ARRAY['Papas','Bechamel','Ají ahumado','Merkén','Parmesano','Tocino'],
            ARRAY['Lácteos'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'porcion-papas-fritas',
            'Porción papas fritas',
            'Papas fritas doradas y crujientes',
            7500,
            'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop',
            '8-10 min',
            480,
            NULL,
            ARRAY['Papas','Aceite','Sal'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tabla-mar-tierra',
            'Tabla mar y tierra',
            'Salteado de res, pollo, champiñon , tomates cherry y langostinos. Salsas de la casa de acompañamiento y porcion de papas fritas.',
            26900,
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop',
            '22-25 min',
            1420,
            NULL,
            ARRAY['Res','Pollo','Langostinos','Champiñones','Tomates cherry','Papas fritas','Salsas'],
            ARRAY['Mariscos'],
            ARRAY[],
            true,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pizza-camaron',
            'Pizza de Camarón',
            'Masa a la piedra con salsa pomodoro casera, queso fundido, camarones salteados, champiñones, tomate cherrys y cebollín',
            14900,
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop',
            '15-18 min',
            820,
            NULL,
            ARRAY['Masa pizza','Salsa pomodoro','Queso','Camarones','Champiñones','Tomate cherry','Cebollín'],
            ARRAY['Gluten','Lácteos','Mariscos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pizza-todas-carnes',
            'Pizza Todas las carnes',
            'Masa a la piedra con salsa pomodoro casera, res, pollo, cerdo, longaniza, tocino ahumado y queso fundido.',
            15900,
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop',
            '15-18 min',
            980,
            NULL,
            ARRAY['Masa pizza','Salsa pomodoro','Res','Pollo','Cerdo','Longaniza','Tocino','Queso'],
            ARRAY['Gluten','Lácteos'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pizza-salame',
            'Pizza Salame',
            'Masa a la piedra con salsa pomodoro casera, queso fundido, salame y tocino ahumado.',
            12900,
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop',
            '12-15 min',
            880,
            NULL,
            ARRAY['Masa pizza','Salsa pomodoro','Queso','Salame','Tocino'],
            ARRAY['Gluten','Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pizza-vegetales',
            'Pizza de Vegetales',
            'Masa a la piedra con salsa pomodoro casera, queso fundido, champiñones, maíz, tomate cherrys, pimentón y hojas verdes de la estación.',
            13900,
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop',
            '12-15 min',
            720,
            NULL,
            ARRAY['Masa pizza','Salsa pomodoro','Queso','Champiñones','Maíz','Tomate cherry','Pimentón','Hojas verdes'],
            ARRAY['Gluten','Lácteos'],
            ARRAY['vegetarian'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pizza-pollo-bacon',
            'Pizza de Pollo y Bacon',
            'Masa a la piedra con salsa pomodoro casera, queso fundido, pollo, tocino, champiñones, maíz y hojas verdes de la estación.',
            14900,
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop',
            '15-18 min',
            850,
            NULL,
            ARRAY['Masa pizza','Salsa pomodoro','Queso','Pollo','Tocino','Champiñones','Maíz','Hojas verdes'],
            ARRAY['Gluten','Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'gran-torobayo',
            'Gran Torobayo 500cc',
            'Cerveza artesanal Torobayo en formato grande',
            5900,
            'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500&h=400&fit=crop',
            '2 min',
            210,
            NULL,
            ARRAY['Cerveza Torobayo'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'kunstmann-torobayo',
            'Kunstmann Torobayo individual',
            'Cerveza Kunstmann Torobayo en formato individual',
            4900,
            'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500&h=400&fit=crop',
            '2 min',
            180,
            NULL,
            ARRAY['Cerveza Kunstmann Torobayo'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'kunstmann-sin-filtrar',
            'kunstmann sin filtrar',
            'pale lager sin filtrar',
            4900,
            'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500&h=400&fit=crop',
            '2 min',
            180,
            NULL,
            ARRAY['Cerveza Kunstmann sin filtrar'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'guinness-extra-stout',
            'Guinness extra stout 473 ML',
            'Cerveza premuim Irlanda lata 473ML extra stout
Guinness',
            4900,
            'https://images.unsplash.com/photo-1547059470-3b0c7cd0e837?w=500&h=400&fit=crop',
            '2 min',
            210,
            NULL,
            ARRAY['Cerveza Guinness'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'corona-individual',
            'Corona individual',
            'Cerveza Corona con su característico sabor suave',
            3000,
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
            '2 min',
            148,
            NULL,
            ARRAY['Cerveza Corona'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'heineken-individual',
            'Heineken individual',
            'Cerveza Heineken premium lager',
            3000,
            'https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=500&h=400&fit=crop',
            '2 min',
            142,
            NULL,
            ARRAY['Cerveza Heineken'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'papas-bravas-shop',
            'Papas bravas + 2 shop ruta S-70',
            'Combo de papas bravas con 2 shop de cerveza',
            12500,
            'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop',
            '15 min',
            980,
            NULL,
            ARRAY['Papas bravas','2 Shop cerveza'],
            ARRAY['Lácteos','Gluten'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cerveza-sin-alcohol',
            'Cerveza sin alcohol',
            'Cerveza 0% alcohol',
            3000,
            'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500&h=400&fit=crop',
            '2 min',
            80,
            NULL,
            ARRAY['Cerveza sin alcohol'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'royal-sin-alcohol',
            'Royal sin alcohol',
            'Cerveza Royal 0% alcohol',
            3000,
            'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500&h=400&fit=crop',
            '2 min',
            80,
            NULL,
            ARRAY['Cerveza Royal sin alcohol'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'royal-individual',
            'Royal Individual.',
            'Cerveza Royal en formato individual',
            3000,
            'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500&h=400&fit=crop',
            '2 min',
            150,
            NULL,
            ARRAY['Cerveza Royal'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cuello-negro-ipa',
            'Cuello Negro IPA 473cc',
            'India Pale Ale con notas cítricas y amargor característico',
            4500,
            'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500&h=400&fit=crop',
            '2 min',
            220,
            NULL,
            ARRAY['Cerveza Cuello Negro IPA'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'cuello-negro-stout',
            'Cuello Negro Stout 473cc',
            'Cerveza negra con notas a café y chocolate',
            4500,
            'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500&h=400&fit=crop',
            '2 min',
            230,
            NULL,
            ARRAY['Cerveza Cuello Negro Stout'],
            ARRAY['Gluten'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pisco-sour-clasico',
            'Pisco Sour clásico',
            'El tradicional pisco sour chileno',
            4000,
            'https://images.unsplash.com/photo-1541546006121-5c3bc5e8c7b9?w=500&h=400&fit=crop',
            '5 min',
            180,
            NULL,
            ARRAY['Pisco','Limón','Azúcar','Clara de huevo'],
            ARRAY['Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pisco-sour-frutal',
            'Pisco Sour Frutal',
            'Pisco sour con frutas de la estación',
            4200,
            'https://images.unsplash.com/photo-1541546006121-5c3bc5e8c7b9?w=500&h=400&fit=crop',
            '5-7 min',
            200,
            NULL,
            ARRAY['Pisco','Frutas de estación','Limón','Azúcar','Clara de huevo'],
            ARRAY['Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'amaretto-sour',
            'Amaretto sour',
            'Cóctel dulce y ácido con licor de almendras',
            4000,
            'https://images.unsplash.com/photo-1541546006121-5c3bc5e8c7b9?w=500&h=400&fit=crop',
            '5 min',
            170,
            NULL,
            ARRAY['Amaretto','Limón','Azúcar','Clara de huevo'],
            ARRAY['Huevos','Frutos secos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'whisky-sour',
            'Whisky sour',
            'Clásico cóctel con whisky bourbon',
            4500,
            'https://images.unsplash.com/photo-1542849187-5ec6ea5e6a27?w=500&h=400&fit=crop',
            '5 min',
            160,
            NULL,
            ARRAY['Whisky bourbon','Limón','Azúcar','Clara de huevo'],
            ARRAY['Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'jerez-sour',
            'Jerez sour',
            'Sofisticado cóctel con vino de Jerez',
            4000,
            'https://images.unsplash.com/photo-1541546006121-5c3bc5e8c7b9?w=500&h=400&fit=crop',
            '5 min',
            150,
            NULL,
            ARRAY['Jerez','Limón','Azúcar','Clara de huevo'],
            ARRAY['Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tequila-blue',
            'Tequila blue',
            'Cóctel vibrante con tequila y curazao azul',
            4500,
            'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&h=400&fit=crop',
            '5 min',
            190,
            NULL,
            ARRAY['Tequila','Curazao azul','Limón','Triple sec'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tequila-sunrise',
            'Tequila sunrise',
            'Hermoso cóctel degradado con tequila y granadina',
            4500,
            'https://images.unsplash.com/photo-1481671703460-040cb8a2d909?w=500&h=400&fit=crop',
            '5 min',
            210,
            NULL,
            ARRAY['Tequila','Jugo de naranja','Granadina'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'caipiroska',
            'Caipiroska',
            'Versión con vodka de la clásica caipiriña',
            4500,
            'https://images.unsplash.com/photo-1607446045875-de57c995726b?w=500&h=400&fit=crop',
            '5 min',
            180,
            NULL,
            ARRAY['Vodka','Limón','Azúcar'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'vaina-baileys',
            'Vaina baileys',
            'Versión premium de la vaina con Baileys',
            6500,
            'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop',
            '5 min',
            280,
            NULL,
            ARRAY['Baileys','Vino dulce','Yema de huevo','Canela'],
            ARRAY['Huevos','Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'manhattan',
            'Manhattan',
            'Elegante cóctel con whisky y vermut',
            5000,
            'https://images.unsplash.com/photo-1542849187-5ec6ea5e6a27?w=500&h=400&fit=crop',
            '5 min',
            190,
            NULL,
            ARRAY['Whisky bourbon','Vermut rojo','Amargo de angostura','Cereza'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'alexander',
            'Alexander',
            'Cóctel cremoso con coñac y crema de cacao',
            5500,
            'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop',
            '5 min',
            280,
            NULL,
            ARRAY['Coñac','Crema de cacao','Crema de leche'],
            ARRAY['Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'bitter-batido',
            'Bitter batido',
            'Refrescante aperitivo con bitter y limón',
            4000,
            'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop',
            '5 min',
            140,
            NULL,
            ARRAY['Bitter','Limón','Azúcar','Soda'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            '2x-moscow-mule',
            '2x Moscow mule',
            'Promoción por horario',
            9000,
            'https://images.unsplash.com/photo-1540820264859-49c0efa0cd84?w=500&h=400&fit=crop',
            '6 min',
            360,
            NULL,
            ARRAY['Vodka','Ginger beer','Limón','Menta'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            '2x-mojito',
            '2x Mojito',
            'Promoción por horario',
            7400,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '10 min',
            440,
            NULL,
            ARRAY['Ron blanco','Menta','Limón','Azúcar','Soda'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'sangria-borgona',
            'Sangría o Borgoña (según stock)',
            'Refrescante bebida a base de vino con frutas',
            4000,
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop',
            '5 min',
            200,
            NULL,
            ARRAY['Vino','Frutas','Azúcar','Licor'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'whisky-sour-premium',
            'Whisky sour premium',
            'Whisky sour con whisky premium reserva',
            6500,
            'https://images.unsplash.com/photo-1542849187-5ec6ea5e6a27?w=500&h=400&fit=crop',
            '5 min',
            180,
            NULL,
            ARRAY['Whisky premium','Limón','Azúcar','Clara de huevo'],
            ARRAY['Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'corto-jagger',
            'Corto jagger',
            'Shot de Jägermeister bien helado',
            4500,
            'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop',
            '2 min',
            100,
            NULL,
            ARRAY['Jägermeister'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tropical-gin',
            'Tropical Gin',
            'Gin tonic tropical con frutas exóticas',
            6000,
            'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&h=400&fit=crop',
            '5-7 min',
            200,
            NULL,
            ARRAY['Gin','Tónica','Frutas tropicales','Especias'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'baileys',
            'Baileys',
            'Crema irlandesa de whisky',
            6500,
            'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=500&h=400&fit=crop',
            '2 min',
            130,
            NULL,
            ARRAY['Baileys'],
            ARRAY['Lácteos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'beefeater-pink',
            'Beefeater Pink',
            'Gin con fresas naturales',
            5000,
            'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=500&h=400&fit=crop',
            '2 min',
            65,
            NULL,
            ARRAY['Gin Beefeater Pink'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mistral-40',
            'Mistral 40',
            'Pisco chileno 40°',
            5000,
            'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=500&h=400&fit=crop',
            '2 min',
            70,
            NULL,
            ARRAY['Pisco Mistral 40°'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'mistral-nobel-barrica',
            'Mistral Nobel Barrica Tostada',
            'Pisco añejado en barrica tostada',
            6500,
            'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=500&h=400&fit=crop',
            '2 min',
            70,
            NULL,
            ARRAY['Pisco Mistral Nobel Barrica'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'havana-anejo-reserva',
            'Havana añejo reserva',
            'Ron cubano añejo reserva',
            5500,
            'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=500&h=400&fit=crop',
            '2 min',
            65,
            NULL,
            ARRAY['Ron Havana Añejo'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'havana-7-anos',
            'Ron havana reserva 7 años',
            'reserva 7 años',
            8000,
            'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=500&h=400&fit=crop',
            '2 min',
            65,
            NULL,
            ARRAY['Ron Havana 7 años'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ron-barcelo-imperial',
            'Ron barcelo imperial',
            'Ron Barceló Imperial el resultado del maridaje de antiguas reservas de Imperial junto a los nobles cortes de roble blanco americano y barricas del Chateau DYquem. Es un ron delicioso, elegante y de carácter suave.',
            8900,
            'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=500&h=400&fit=crop',
            '2 min',
            65,
            NULL,
            ARRAY['Ron Barceló Imperial'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'absolut-peppar',
            'Absolut Peppar',
            'Vodka con sabor a pimienta',
            7000,
            'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=500&h=400&fit=crop',
            '2 min',
            65,
            NULL,
            ARRAY['Vodka Absolut Peppar'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'absolut-pear',
            'Absolut Pear',
            'Vodka con sabor a pera',
            5500,
            'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=500&h=400&fit=crop',
            '2 min',
            65,
            NULL,
            ARRAY['Vodka Absolut Pear'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'jack-daniels',
            'Jack Daniels',
            'Whisky Tennessee americano',
            7000,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '2 min',
            65,
            NULL,
            ARRAY['Whisky Jack Daniels'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ballantines',
            'Ballantines',
            'Whisky escocés blend',
            4500,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '2 min',
            65,
            NULL,
            ARRAY['Whisky Ballantines'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'johnnie-black',
            'Johnnie Black',
            'Whisky escocés Black Label',
            7000,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '2 min',
            65,
            NULL,
            ARRAY['Whisky Johnnie Walker Black'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'johnnie-red',
            'Johnnie Red',
            'Whisky escocés Red Label',
            5000,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '2 min',
            65,
            NULL,
            ARRAY['Whisky Johnnie Walker Red'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'chivas-12',
            'Chivas 12 años',
            'Whisky escocés premium 12 años',
            8500,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '2 min',
            65,
            NULL,
            ARRAY['Whisky Chivas Regal 12'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'chivas-18',
            'Chivas 18 años',
            'Whisky escocés ultra premium 18 años',
            10000,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '2 min',
            65,
            NULL,
            ARRAY['Whisky Chivas Regal 18'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'koyle-cabernet',
            'Koyle Cabernet Souvinong 750cc',
            'Vino tinto reserva del Valle de Colchagua',
            25000,
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop',
            '2 min',
            125,
            NULL,
            ARRAY['Vino Cabernet Sauvignon'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'copa-casa',
            'Copa de la Casa',
            'Vino de la casa servido por copa',
            3500,
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop',
            '2 min',
            125,
            NULL,
            ARRAY['Vino de la casa'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'castillo-molina-red',
            'Castillo Molina Red Blend',
            'Blend de cepas tintas premium',
            21000,
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop',
            '2 min',
            125,
            NULL,
            ARRAY['Vino Red Blend'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'castillo-molina-merlot',
            'Castillo Molina Merlot',
            '750 ml',
            21000,
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop',
            '2 min',
            125,
            NULL,
            ARRAY['Vino Merlot'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'casillero-sauvignon-blanc',
            'Casillero Diablo reserva sauvignon blanc 750 cc',
            'Vino blanco fresco y afrutado',
            15000,
            'https://images.unsplash.com/photo-1558001373-7b93ee48ffa2?w=500&h=400&fit=crop',
            '2 min',
            120,
            NULL,
            ARRAY['Vino Sauvignon Blanc'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'late-harvest',
            'Late harvest 750cc Casillero del Diablo',
            '375 ml',
            15000,
            'https://images.unsplash.com/photo-1558001373-7b93ee48ffa2?w=500&h=400&fit=crop',
            '2 min',
            150,
            NULL,
            ARRAY['Vino Late Harvest'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'casillero-privada-cabernet',
            'Casillero del DIablo, Reserva Privada Cabernet Souvinong',
            'Vino tinto reserva privada premium',
            17900,
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop',
            '2 min',
            125,
            NULL,
            ARRAY['Vino Cabernet Sauvignon'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'late-sauvignon-blanc',
            'Late sauvignon blanc',
            'Late sauvignon blanc 92 pts ideal para quesos, postres vino para maridajes agridulces, vino con toques dulces',
            12500,
            'https://images.unsplash.com/photo-1558001373-7b93ee48ffa2?w=500&h=400&fit=crop',
            '2 min',
            140,
            NULL,
            ARRAY['Vino Late Harvest Sauvignon Blanc'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'calcu-syrah',
            'Calcu Gran Reserva Syrah',
            'Vino tinto gran reserva del Valle del Maipo',
            16990,
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop',
            '2 min',
            125,
            NULL,
            ARRAY['Vino Syrah'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'calcu-carmenere',
            'Calcu Carmenere',
            'Cepa emblemática de Chile',
            16990,
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop',
            '2 min',
            125,
            NULL,
            ARRAY['Vino Carmenere'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'calcu-cabernet-franc',
            'Calcu Cabernet Franc',
            'Vino elegante y complejo',
            16990,
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop',
            '2 min',
            125,
            NULL,
            ARRAY['Vino Cabernet Franc'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'montes-ensamblaje',
            'Montes Ensamblaje Cabernet Sauvignon - Carmenere',
            'Blend premium de dos cepas nobles',
            16990,
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop',
            '2 min',
            125,
            NULL,
            ARRAY['Vino Blend'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'montes-carmenere',
            'Montes Carmenere',
            'Carmenere de alta expresión',
            16990,
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop',
            '2 min',
            125,
            NULL,
            ARRAY['Vino Carmenere'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'viu-manent-malbec',
            'Viu Manent Malbec',
            'Malbec intenso y afrutado',
            16990,
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop',
            '2 min',
            125,
            NULL,
            ARRAY['Vino Malbec'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'viu-manent-cabernet',
            'Viu Manent Cabernet Souvignon',
            'Cabernet Sauvignon de gran estructura',
            16990,
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop',
            '2 min',
            125,
            NULL,
            ARRAY['Vino Cabernet Sauvignon'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'viu-manent-carmenere',
            'Viu Manent Carmenere',
            'Carmenere con carácter único',
            16990,
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&h=400&fit=crop',
            '2 min',
            125,
            NULL,
            ARRAY['Vino Carmenere'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'agregado-1',
            'AGREGADO I',
            'DETALLAR',
            1000,
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop',
            'Variable',
            NULL,
            NULL,
            ARRAY['Variable'],
            ARRAY[],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'agregado-2',
            'AGREGADO II',
            'Agregado mediano según disponibilidad',
            2000,
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop',
            'Variable',
            NULL,
            NULL,
            ARRAY['Variable'],
            ARRAY[],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'agregado-3',
            'AGREGADO III',
            'Agregado grande según disponibilidad',
            3000,
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop',
            'Variable',
            NULL,
            NULL,
            ARRAY['Variable'],
            ARRAY[],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'torta-1',
            'Torta I',
            'Torta personalizada tamaño pequeño',
            35000,
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop',
            '48 horas',
            NULL,
            NULL,
            ARRAY['Variable según pedido'],
            ARRAY['Lácteos','Gluten','Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'torta-2',
            'Torta II',
            'Torta personalizada tamaño mediano',
            38000,
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop',
            '48 horas',
            NULL,
            NULL,
            ARRAY['Variable según pedido'],
            ARRAY['Lácteos','Gluten','Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'torta-3',
            'Torta III',
            'Torta personalizada tamaño grande',
            42000,
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop',
            '48 horas',
            NULL,
            NULL,
            ARRAY['Variable según pedido'],
            ARRAY['Lácteos','Gluten','Huevos'],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'agregado-4',
            'AGREGADO IV',
            'Agregado especial según disponibilidad',
            4000,
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop',
            'Variable',
            NULL,
            NULL,
            ARRAY['Variable'],
            ARRAY[],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'agregado-5',
            'AGREGADO V',
            'Agregado premium según disponibilidad',
            5000,
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop',
            'Variable',
            NULL,
            NULL,
            ARRAY['Variable'],
            ARRAY[],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-capuccino-torta',
            'OFERTA en horario de 16:00 a 19:00 hrs',
            'Capuccino o cortado+torta',
            6400,
            'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&h=400&fit=crop',
            '5 min',
            420,
            NULL,
            ARRAY['Café','Leche','Torta del día'],
            ARRAY['Lácteos','Gluten'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-2x-moscow-mule',
            '2x Moscow mule',
            'Promoción por horario',
            9000,
            'https://images.unsplash.com/photo-1540820264859-49c0efa0cd84?w=500&h=400&fit=crop',
            '6 min',
            360,
            NULL,
            ARRAY['Vodka','Ginger beer','Limón','Menta'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'promo-2x-mojito',
            '2x Mojito',
            'Promoción por horario',
            7400,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '10 min',
            440,
            NULL,
            ARRAY['Ron blanco','Menta','Limón','Azúcar','Soda'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'auguri',
            'Auguri',
            'Cóctel de autor con mezcla exclusiva de la casa',
            6990,
            'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&h=400&fit=crop',
            '5-7 min',
            180,
            NULL,
            ARRAY['Base de licor (ej. vodka, gin)','Frutas de estación','Hierbas aromáticas','Jarabes artesanales'],
            ARRAY[],
            ARRAY[],
            true,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'capriccio-cocktail',
            'Capriccio',
            'Cóctel signature refrescante con toques mediterráneos de romero y naranja, evocando la brisa marina.',
            6990,
            'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&h=400&fit=crop',
            '5-7 min',
            190,
            NULL,
            ARRAY['Base de licor (ej. ron, pisco)','Cítricos','Especias mediterráneas (ej. romero)','Jarabe de naranja'],
            ARRAY[],
            ARRAY[],
            true,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'sour',
            'Sour',
            'Clásico cóctel sour, perfectamente equilibrado con pisco o whisky, jugo de limón fresco, azúcar y un toque de amargo de angostura.',
            5000,
            'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=400&fit=crop',
            '3-5 min',
            150,
            NULL,
            ARRAY['Pisco o whisky','Jugo de limón','Azúcar','Clara de huevo','Amargo de angostura'],
            ARRAY['Huevos'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'piccione',
            'Piccione',
            'Cóctel refrescante a base de vodka con vibrantes notas cítricas y un sutil toque de menta, ideal para el verano.',
            6290,
            'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&h=400&fit=crop',
            '5 min',
            170,
            NULL,
            ARRAY['Base de vodka','Cítricos frescos','Toque de menta'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'espresso-martini',
            'Espresso Martini',
            'Intenso y sofisticado cóctel con vodka, café espresso recién hecho y licor de café, perfecto para los amantes del café.',
            5000,
            'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?w=500&h=400&fit=crop',
            '3-5 min',
            220,
            NULL,
            ARRAY['Vodka','Espresso','Licor de café','Azúcar'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'limoncello-spritz',
            'Limoncello Spritz',
            'Refrescante spritz con el auténtico limoncello italiano, prosecco y agua con gas, decorado con una rodaja de limón.',
            5000,
            'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&h=400&fit=crop',
            '3 min',
            140,
            NULL,
            ARRAY['Limoncello','Prosecco','Agua con gas','Rodaja de limón'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'old-fashioned',
            'Old Fashioned',
            'El clásico cóctel con whisky bourbon, azúcar, amargo de angostura y un twist de naranja, una bebida atemporal.',
            5000,
            'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500&h=400&fit=crop',
            '5 min',
            180,
            NULL,
            ARRAY['Whisky bourbon','Azúcar','Amargo de angostura','Naranja'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ramazzoti-spritz',
            'Ramazzoti Spritz',
            'Spritz italiano vibrante con Ramazzotti, prosecco, agua con gas y una rodaja de naranja, ideal para el aperitivo.',
            5000,
            'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=400&fit=crop',
            '3 min',
            150,
            NULL,
            ARRAY['Ramazzotti','Prosecco','Agua con gas','Naranja'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'martini-sporco',
            'Martini Sporco',
            'Martini clásico con un toque ''sucio'' de salmuera de aceitunas, preparado con gin o vodka y vermut seco, decorado con aceitunas.',
            5000,
            'https://images.unsplash.com/photo-1575650775512-ae89114c45dd?w=500&h=400&fit=crop',
            '3-5 min',
            160,
            NULL,
            ARRAY['Gin o vodka','Vermut seco','Salmuera de aceitunas','Aceitunas'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'gin-tonic',
            'Gin Tonic',
            'El clásico refrescante con gin premium, agua tónica y un toque de limón o pepino, realzado con hierbas aromáticas.',
            5000,
            'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?w=500&h=400&fit=crop',
            '3 min',
            140,
            NULL,
            ARRAY['Gin premium','Agua tónica','Limón o pepino','Hierbas aromáticas'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ceviche-pacifico',
            'Ceviche del Pacífico',
            'Cubos de atún fresco marinados al estilo leche de tigre, con cítricos, pasta de ají y jengibre, coronados con finas láminas de palta y chips de plátano verde para aportar textura. Una explosión de frescura y sabor del mar.',
            16990,
            'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=500&h=400&fit=crop',
            '15-20 min',
            280,
            NULL,
            ARRAY['Atún fresco','Leche de tigre','Cítricos','Pasta de ají','Jengibre','Palta','Chips de plátano verde'],
            ARRAY['Pescado'],
            ARRAY['gluten-free'],
            true,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'bruschetta-picante-golfo',
            'Bruschetta Picante del Golfo',
            'Camarones ecuatorianos salteados con un toque de ají, servidos sobre patacón de plátano verde y toques de limón y cilantro.',
            9990,
            'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&h=400&fit=crop',
            '10-12 min',
            220,
            NULL,
            ARRAY['Camarones ecuatorianos','Ají','Patacón de plátano verde','Limón','Cilantro'],
            ARRAY['Mariscos'],
            ARRAY['gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tabla-fuego-brasa',
            'Tabla de Fuego y Brasa',
            'Un festín de cortes: Costillar a la olla, truto de pollo al arrostro, cerdo a la plancha sobre una base de papas rústicas. Ideal para 4 personas, flambeado y acompañado de chimichurri casero.',
            28990,
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop',
            '25-30 min',
            980,
            NULL,
            ARRAY['Costillar','Pollo','Cerdo','Papas rústicas','Chimichurri casero'],
            ARRAY[],
            ARRAY[],
            true,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tabla-mediterranea-fria',
            'Tabla Mediterránea Fría',
            'Selección de charcutería y quesos curados, acompañada de encurtidos caseros, pan rústico de la casa, frutas de estación y frutos secos. Ideal para 2 personas y disfrutar con vino.',
            13990,
            'https://images.unsplash.com/photo-1541345032-c33c8e2cc0c5?w=500&h=400&fit=crop',
            '10 min',
            650,
            NULL,
            ARRAY['Charcutería','Quesos curados','Encurtidos caseros','Pan rústico','Frutas de estación','Frutos secos'],
            ARRAY['Gluten','Lácteos','Frutos secos'],
            ARRAY[],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'papas-bufalo',
            'Papas Búfalo',
            'Papas rústicas salteadas en pasta de ají con especias, un acompañamiento picante y delicioso.',
            9990,
            'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop',
            '10-12 min',
            320,
            NULL,
            ARRAY['Papas rústicas','Pasta de ají','Especias'],
            ARRAY[],
            ARRAY['vegan','gluten-free'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'gin-tanqueray-london',
            'Gin Tanqueray London Dry',
            'Gin premium London Dry, perfecto para un gin tonic clásico.',
            6990,
            'https://images.unsplash.com/photo-1608885898946-27b461c42e48?w=500&h=400&fit=crop',
            '1 min',
            70,
            NULL,
            ARRAY['Gin Tanqueray London Dry'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'whiskey-ballentines',
            'Whiskey Ballentines Bourbon 7 años',
            'Whiskey bourbon añejado por 7 años, suave y con carácter.',
            4990,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '1 min',
            70,
            NULL,
            ARRAY['Whiskey Ballentines Bourbon'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'whiskey-johnnie-double-black',
            'Whiskey Johnnie Walker Double Black',
            'Whiskey escocés premium Double Black, con un sabor ahumado intenso y profundo.',
            12990,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '1 min',
            70,
            NULL,
            ARRAY['Whiskey Johnnie Walker Double Black'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'gin-tanqueray-sevilla',
            'Gin Tanqueray Sevilla',
            'Gin con un distintivo sabor a naranjas de Sevilla, ideal para cócteles cítricos.',
            7990,
            'https://images.unsplash.com/photo-1608885898946-27b461c42e48?w=500&h=400&fit=crop',
            '1 min',
            70,
            NULL,
            ARRAY['Gin Tanqueray Sevilla'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'gin-tanqueray-royal',
            'Gin Tanqueray Royal',
            'Gin premium Royal, con un perfil de sabor único y sofisticado.',
            6990,
            'https://images.unsplash.com/photo-1608885898946-27b461c42e48?w=500&h=400&fit=crop',
            '1 min',
            70,
            NULL,
            ARRAY['Gin Tanqueray Royal'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'tequila-don-julio',
            'Tequila Don Julio',
            'Tequila premium mexicano, suave y de alta calidad, perfecto para degustar solo o en cócteles.',
            8490,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '1 min',
            65,
            NULL,
            ARRAY['Tequila Don Julio'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'chivas-regal-12',
            'Chivas Regal 12 Años',
            'Whiskey escocés de 12 años, suave y equilibrado, con notas de miel y frutas.',
            7990,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '1 min',
            70,
            NULL,
            ARRAY['Chivas Regal 12 años'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'whiskey-johnnie-black',
            'Whiskey Johnnie Walker Black',
            'Whiskey escocés Black Label, un blend rico y complejo con notas de frutas oscuras y vainilla.',
            8990,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '1 min',
            70,
            NULL,
            ARRAY['Whiskey Johnnie Walker Black'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'whiskey-jack-daniel-apple',
            'Whiskey Jack Daniel Apple',
            'Whiskey con un refrescante sabor a manzana verde, ideal para mezclar o disfrutar con hielo.',
            7990,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '1 min',
            75,
            NULL,
            ARRAY['Whiskey Jack Daniel Apple'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'gin-beefeater',
            'Gin Beefeater',
            'Gin inglés clásico, con un perfil de sabor audaz y enebro prominente.',
            6990,
            'https://images.unsplash.com/photo-1608885898946-27b461c42e48?w=500&h=400&fit=crop',
            '1 min',
            70,
            NULL,
            ARRAY['Gin Beefeater'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'jagermeister',
            'Jägermeister',
            'Licor de hierbas alemán, con una mezcla única de 56 botánicos, ideal para shots fríos.',
            6990,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '1 min',
            80,
            NULL,
            ARRAY['Jägermeister'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'drambuie',
            'Drambuie',
            'Licor escocés de whisky y miel, con hierbas aromáticas y especias, de sabor dulce y complejo.',
            6990,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '1 min',
            85,
            NULL,
            ARRAY['Drambuie'],
            ARRAY[],
            ARRAY[],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ron-havana-7',
            'Ron Havana Añejo 7 Años',
            'Ron cubano añejado por 7 años, con notas de cacao, vainilla y tabaco, perfecto para cócteles o solo.',
            8990,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '1 min',
            65,
            NULL,
            ARRAY['Ron Havana 7 años'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'ron-havana-especial',
            'Ron Havana Añejo Especial',
            'Ron cubano añejo especial, suave y versátil, ideal para mezclar en tus cócteles favoritos.',
            5990,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '1 min',
            65,
            NULL,
            ARRAY['Ron Havana Añejo Especial'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pisco-gobernador',
            'Pisco El Gobernador',
            'Pisco chileno premium, destilado de uvas moscatel, con un sabor suave y aromático.',
            5990,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '1 min',
            60,
            NULL,
            ARRAY['Pisco El Gobernador'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'whisky-johnnie-red',
            'Whisky Johnnie Walker Red',
            'Whisky escocés Red Label, un blend vibrante y versátil, ideal para mezclar.',
            6990,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '1 min',
            70,
            NULL,
            ARRAY['Whisky Johnnie Walker Red'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pisco-alto-carmen',
            'Pisco Alto del Carmen',
            'Pisco chileno tradicional, elaborado con uvas moscatel, de sabor suave y equilibrado.',
            5990,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '1 min',
            60,
            NULL,
            ARRAY['Pisco Alto del Carmen'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'pisco-mistral-nobel',
            'Pisco Mistral Nobel',
            'Pisco chileno Nobel, de alta gama, con un proceso de añejamiento que le otorga suavidad y complejidad.',
            6990,
            'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500&h=400&fit=crop',
            '1 min',
            60,
            NULL,
            ARRAY['Pisco Mistral Nobel'],
            ARRAY[],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'chardon-rose-187',
            'Chardon Rose 187 cc',
            'Espumante rosé en formato personal de 187 cc, ideal para celebrar momentos especiales.',
            5500,
            'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=500&h=400&fit=crop',
            '1 min',
            85,
            NULL,
            ARRAY['Espumante Chardon Rose'],
            ARRAY['Sulfitos'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'chardon-brut-750',
            'Chardon brut 750 cc',
            'Espumante brut en botella completa de 750 cc, perfecto para compartir y brindar.',
            16990,
            'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=500&h=400&fit=crop',
            '1 min',
            85,
            NULL,
            ARRAY['Espumante Chardon Brut'],
            ARRAY['Sulfitos'],
            ARRAY['vegan'],
            false,
            true,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


          INSERT INTO products (
            legacy_id, name, description, base_price, image_url,
            prep_time, calories, spice_level, ingredients, allergens,
            dietary_tags, is_chef_special, is_popular, is_seasonal
          ) VALUES (
            'viu-manent-noble',
            'Viu Manent Noble Semillon Chardonnay',
            'Vino dulce noble de cosecha tardía, con notas de frutas maduras y miel, ideal para postres.',
            9990,
            'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=500&h=400&fit=crop',
            '1 min',
            120,
            NULL,
            ARRAY['Vino Viu Manent Noble'],
            ARRAY['Sulfitos'],
            ARRAY['vegan'],
            false,
            false,
            false
          )
          ON CONFLICT (legacy_id) DO UPDATE SET
            name = EXCLUDED.name,
            description = EXCLUDED.description,
            base_price = EXCLUDED.base_price
        ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'guinness-extra-stout-473-ml'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'corona'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'royal'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'heineken'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'shop-heineken'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'shop-kunstman-torobayo'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'chelada'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'michelada'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'shop-ruta-s70-ambar'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cuello-negro-ambar'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '2x-shop-heineken'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '2x-shop-ruta-s70'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'austral-calafate'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pisco-sour'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pisco-sour-frutales'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'martini-dry'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pina-colada'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mojito-clasico'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mojito-frutal'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mojito-cerveza'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tequila-margarita'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tequila-margarita-frutal'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ruso-blanco'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'vaina'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'caipirina'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'old-fashion'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ramazzotti'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'aperol'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cosmopolitan'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'clavo-oxidado'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mojito-ramazzotti'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'moscow-mule'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'negroni'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pisco-sour-ramazzotti'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'primavera'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'amareto-sour'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'daiquiri'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'god-father'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'laguna-azul'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mega-mojito'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mega-mojito-frutal'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mojito-blue'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mojito-jagger'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'chardonay-sour'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jaggermeister'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tom-collins'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'whiskey-sour'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pisco-sour-catedral'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ruso-negro'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'orgasmo'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '2x-pisco-sour'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '2x-caipirinha'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '2x-ramazzotti'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '2x-mojito-frutal'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '2x-ruso-blanco'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pisco-sour-peruano'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '2x-tequila-margarita'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'fernet-branca'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'shot-manzanilla'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'copa-de-vino-castillo-molina'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'shot-tequila'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'shot-jose-cuervo-especial'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'shot-jose-cuervo-reposado'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'crema-de-whisky'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tanqueray'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'campari'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'botella-vino-alto'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'sangria'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-tequila'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'propeller'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'boolton'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'beefeater'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'gin-hendricks'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tanqueray-berries'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mistral-35'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'gobernador'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mistral-nobel-barrica-40'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'alto-del-carmen'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'horcon-quemado'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pisco-bauza'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'el-gobernador'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mistral-nobel'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '2x-pisco-mistral-35'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '2x-pisco-alto-del-carmen'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ron-habana-reserva-7-anos'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'havana-reserva'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'havana-club'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'absolut'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'eristoff'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'stolichnaya'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ballantine-s'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'johnny-red-label'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'johnny-black-label'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jack-daniels-n-7'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'chivas-regal-12-anos'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'fireball'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'johnnie-walker-game-of-thrones'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'johnnie-blonde'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'coca-cola'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'coca-cola-zero'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'fanta'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'sprite'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'schweppes-ginger-ale'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'schweppes-tonica'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'limonada-tradicional'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'limonada-menta-jengibre'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jugo-natural-frambuesa'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jugo-natural-de-pina'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jugo-natural-mango'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jugo-natural-maracuya'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'agua-mineral-con-gas'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'agua-mineral-sin-gas'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'red-bull'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'milkshake'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mini-coca-220-cc'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'crush'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pap'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'naranja-platano'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'red-bull-yellow'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mini-sprite'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mini-ginger-ale'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mini-tonica'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mini-pepsi'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mini-coca-zero'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mini-sprite-zero'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mini-tonica-zero'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pepsi'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'limonsoda'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cafe-americano'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cafe-espresso'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cafe-espresso-doble'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cafe-helado'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cafe-irlandes'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cafe-nescafe'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'capuccino'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'capuccino-doble'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'chocolate-caliente'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'chocolate-nevado'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mokaccino'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'te-variedades'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'te'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'capuccino-vainilla'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'capuccino-vainilla-doble'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cortado'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cafe-americano-doble'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'costillar-de-cerdo-a-la-chilena'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pollo-grillado-al-limon-salsa-citrica'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'merluza-crocante'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'salmon-grillado-300-grs-c-guarnicion-a-eleccion'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'lomo-3-pimientas'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'lomo-a-lo-pobre'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'lomo-grillado'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'carne-braseada-coccion-lenta'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'sopa-del-dia'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pizza'
          AND c.slug = 'pizzas'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pizza-individual-1898'
          AND c.slug = 'pizzas'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pizza-1898'
          AND c.slug = 'pizzas'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'extra-queso-pizza'
          AND c.slug = 'pizzas'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'agregado-bbq'
          AND c.slug = 'pizzas'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'agregado-tocino-pizza'
          AND c.slug = 'pizzas'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'churrasco-1898'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'burguer-chada'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'el-puraquina'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'churrasco-italiano'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'churrasco-chacarero'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'barros-luco'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'hamburguesa-americana'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cheese-burger'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-sandwich-mas-shop-ruta-s70'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'champinones-agregado'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'agregado-tomate-cebolla-lechuga'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'agregado-palta'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cheese-bacon'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'porcion-de-papas-fritas'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'salchipapas'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'fish-chips'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tabla-beer-bar'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'chorrillana-1898'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'papas-bravas-para-2'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'papas-bravas-para-4'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ceviche-1898-para-2'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tabla-tradicional'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tabla-tradicional-o-chorrillana-para-2'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'empanada'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'empanada-de-mechada'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cesar-pollo'
          AND c.slug = 'salads'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cesar-camaron'
          AND c.slug = 'salads'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ensalada'
          AND c.slug = 'salads'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'helado-copa'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'helado-copa-triple'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'brownie-con-helado'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'completo-italiano'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'completo-americano'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-completo-schop-heineken'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'crepes-relleno-con-manjar-nueces'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'postre'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-2x-shop-heineken'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-2x-shop-ruta-s70'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-2x-pisco-sour'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-2x-caipirinha'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-2x-ramazzotti'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-2x-mojito-frutal'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-2x-ruso-blanco'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-2x-tequila-margarita'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-2x-pisco-mistral-35'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          '1898',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-2x-pisco-alto-del-carmen'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tomahawk-lomo-vetado'
          AND c.slug = 'recommended'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'anticuchos-parrilleros'
          AND c.slug = 'recommended'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pastel-jaiba-500'
          AND c.slug = 'recommended'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ravioles-salmon'
          AND c.slug = 'recommended'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'crudo'
          AND c.slug = 'recommended'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ramazzotti-violeta'
          AND c.slug = 'recommended'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'caipirina'
          AND c.slug = 'recommended'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tetera-compartir'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tetera-pequena'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'te'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cafe-tradicional'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'expresso'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'expresso-doble'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'americano'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ristretto'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mocaccino'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cafe-irlandes'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'capuccino'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cortado'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'chocolate-caliente'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'chocolate-nevado'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cafe-helado'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'milkshake'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'nutella-coffee'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'infusion-menta-jengibre'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cafe-late'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'afogato'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'caja-te-infusiones'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'lavazza-sachet'
          AND c.slug = 'coffee'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jugo-frambuesa'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'limonada'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'limonada-menta-jengibre'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'agua-mineral-gas'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'red-bull'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'crush'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'sprite'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ginger-ale'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jugo-mango'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jugo-pina'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'coca-cola'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'coca-zero'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'agua-tonica'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'agua-mineral-sin-gas'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'coca-cola-220'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'coca-zero-220'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'sprite-220'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pepsi-220'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'limonada-frambuesa'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jugo-frutilla'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jugo-berries'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'sprite-cero'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'manantial'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cordillerano'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ginger-ale-220'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tonica-220'
          AND c.slug = 'beverages'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jardin-el-arbol'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pastel'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tiramisu'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'copa-helado-infantil'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'crepes-suzette'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'panqueques-celestinos'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'copa-helado-3-sabores'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'leche-asada'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'volcan-chocolate'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'macarons-unidad'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'macarons-variedad'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'galletas-brownie-100'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'galletas-brownie-200'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cheesecake-oreo'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'brownie-helado'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'oferta-capuccino-torta'
          AND c.slug = 'desserts'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'desayuno-continental'
          AND c.slug = 'breakfast'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'barros-jarpa-combo'
          AND c.slug = 'breakfast'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tostadas-palta-combo'
          AND c.slug = 'breakfast'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'huevos-revueltos-queso'
          AND c.slug = 'breakfast'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'huevos-revueltos-tocino'
          AND c.slug = 'breakfast'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'selladito-doble-queso'
          AND c.slug = 'breakfast'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'selladito-barros-jarpa'
          AND c.slug = 'breakfast'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tostadas-palta'
          AND c.slug = 'breakfast'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'omelette-tradicional'
          AND c.slug = 'breakfast'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'crema-sopa-dia'
          AND c.slug = 'appetizers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'camarones-ajillo-pil-pil'
          AND c.slug = 'appetizers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pastel-jaiba-250'
          AND c.slug = 'appetizers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'empanaditas-queso'
          AND c.slug = 'appetizers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'empanaditas-camaron-queso'
          AND c.slug = 'appetizers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ceviche-salmon'
          AND c.slug = 'appetizers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ceviche-compartir-salmon'
          AND c.slug = 'appetizers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ceviche-compartir-camaron-salmon'
          AND c.slug = 'appetizers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ceviche-champinon-individual'
          AND c.slug = 'appetizers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'plateada-braseada'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ravioles-pollo'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'salmon-gratinado'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'risotto-di-mare'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'osobuco-braseado'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'lasagna-bolonesa'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'fetuccinis'
          AND c.slug = 'mains'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'lomo-premium-res'
          AND c.slug = 'steaks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'suprema-ave-peruana'
          AND c.slug = 'steaks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'salmon-plancha'
          AND c.slug = 'steaks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'chuleta-kassler'
          AND c.slug = 'steaks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'lomo-res-pobre'
          AND c.slug = 'steaks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'no-lo-se'
          AND c.slug = 'kids'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'me-da-igual'
          AND c.slug = 'kids'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'hamburguesa-infantil'
          AND c.slug = 'kids'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'plato-rio-tolten'
          AND c.slug = 'salads'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ensalada-cesar'
          AND c.slug = 'salads'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'plato-vegetariano'
          AND c.slug = 'salads'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ensalada-casa'
          AND c.slug = 'salads'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'sorrentinos-pesto'
          AND c.slug = 'salads'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ceviche-champinon-compartir'
          AND c.slug = 'salads'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ensalada-cesar-camaron'
          AND c.slug = 'salads'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'hamburguesa-golosa'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'hamburguesa-arbol'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'barros-luco'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'hamburguesa-italiana'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'sandwich-italiano'
          AND c.slug = 'sandwiches'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'trio-carnes-quesos'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tabla-grande-pichanga'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tabla-pequena-pichanga'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'papas-bravas'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'porcion-papas-fritas'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tabla-mar-tierra'
          AND c.slug = 'sharing'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pizza-camaron'
          AND c.slug = 'pizzas'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pizza-todas-carnes'
          AND c.slug = 'pizzas'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pizza-salame'
          AND c.slug = 'pizzas'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pizza-vegetales'
          AND c.slug = 'pizzas'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pizza-pollo-bacon'
          AND c.slug = 'pizzas'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'gran-torobayo'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'kunstmann-torobayo'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'kunstmann-sin-filtrar'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'guinness-extra-stout'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'corona-individual'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'heineken-individual'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'michelada'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'chelada'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'papas-bravas-shop'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'shop-heineken'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cuello-negro-ambar'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cerveza-sin-alcohol'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'royal-sin-alcohol'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'royal-individual'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cuello-negro-ipa'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cuello-negro-stout'
          AND c.slug = 'beers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pisco-sour-catedral'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pisco-sour-clasico'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pisco-sour-frutal'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'amaretto-sour'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'whisky-sour'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jerez-sour'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mojito-clasico'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mojito-frutal'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mojito-cerveza'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mojito-jagger'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'moscow-mule'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tequila-margarita'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tequila-margarita-frutal'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tequila-blue'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tequila-sunrise'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'laguna-azul'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'daiquiri'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'caipiroska'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'cosmopolitan'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pina-colada'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ruso-blanco'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ruso-negro'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ramazzotti'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'aperol'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'vaina'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'vaina-baileys'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'martini-dry'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tom-collins'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'manhattan'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'alexander'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'negroni'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'bitter-batido'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '2x-pisco-sour'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '2x-tequila-margarita'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '2x-moscow-mule'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '2x-mojito'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = '2x-caipirinha'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'sangria-borgona'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'whisky-sour-premium'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'corto-jagger'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mojito-ramazzotti'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tropical-gin'
          AND c.slug = 'cocktails'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'beefeater'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'baileys'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jaggermeister'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'fernet-branca'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tanqueray'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'beefeater-pink'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mistral-35'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mistral-40'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mistral-nobel'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'horcon-quemado'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'mistral-nobel-barrica'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'havana-club'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'havana-anejo-reserva'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'havana-7-anos'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ron-barcelo-imperial'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'stolichnaya'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'absolut-peppar'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'absolut-pear'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jack-daniels'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ballantines'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'johnnie-black'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'johnnie-red'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'chivas-12'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'chivas-18'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'koyle-cabernet'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'copa-casa'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'castillo-molina-red'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'castillo-molina-merlot'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'casillero-sauvignon-blanc'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'late-harvest'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'casillero-privada-cabernet'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'late-sauvignon-blanc'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'calcu-syrah'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'calcu-carmenere'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'calcu-cabernet-franc'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'montes-ensamblaje'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'montes-carmenere'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'viu-manent-malbec'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'viu-manent-cabernet'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'viu-manent-carmenere'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'agregado-1'
          AND c.slug = 'extras'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'agregado-2'
          AND c.slug = 'extras'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'agregado-3'
          AND c.slug = 'extras'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'torta-1'
          AND c.slug = 'extras'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'torta-2'
          AND c.slug = 'extras'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'torta-3'
          AND c.slug = 'extras'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'agregado-4'
          AND c.slug = 'extras'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'agregado-5'
          AND c.slug = 'extras'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-capuccino-torta'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-2x-pisco-sour'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-2x-tequila-margarita'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-2x-moscow-mule'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-2x-mojito'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'arbol',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'promo-2x-caipirinha'
          AND c.slug = 'specials'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'auguri'
          AND c.slug = 'drinks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'capriccio-cocktail'
          AND c.slug = 'drinks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'sour'
          AND c.slug = 'drinks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'piccione'
          AND c.slug = 'drinks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'espresso-martini'
          AND c.slug = 'drinks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'limoncello-spritz'
          AND c.slug = 'drinks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'old-fashioned'
          AND c.slug = 'drinks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ramazzoti-spritz'
          AND c.slug = 'drinks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'martini-sporco'
          AND c.slug = 'drinks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'negroni'
          AND c.slug = 'drinks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'gin-tonic'
          AND c.slug = 'drinks'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ceviche-pacifico'
          AND c.slug = 'appetizers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'bruschetta-picante-golfo'
          AND c.slug = 'appetizers'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tabla-fuego-brasa'
          AND c.slug = 'main_courses'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tabla-mediterranea-fria'
          AND c.slug = 'main_courses'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'papas-bufalo'
          AND c.slug = 'side_dishes'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'gin-tanqueray-london'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'whiskey-ballentines'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'whiskey-johnnie-double-black'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'gin-tanqueray-sevilla'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'gin-tanqueray-royal'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'tequila-don-julio'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'chivas-regal-12'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'whiskey-johnnie-black'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'whiskey-jack-daniel-apple'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'gin-beefeater'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'jagermeister'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'drambuie'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ron-havana-7'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'ron-havana-especial'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pisco-gobernador'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'whisky-johnnie-red'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pisco-alto-carmen'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'pisco-mistral-nobel'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'gin-hendricks'
          AND c.slug = 'spirits'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'chardon-rose-187'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'chardon-brut-750'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


        INSERT INTO location_products (
          location_id, 
          product_id, 
          category_id,
          is_available
        ) 
        SELECT 
          'capriccio',
          p.id,
          c.id,
          true
        FROM products p
        CROSS JOIN categories c
        WHERE p.legacy_id = 'viu-manent-noble'
          AND c.slug = 'wines'
        ON CONFLICT (location_id, product_id) DO NOTHING
      ;


          INSERT INTO menu_highlights (
            location_id, 
            product_id,
            custom_name,
            custom_description,
            custom_price,
            custom_image,
            display_order
          )
          SELECT 
            'arbol',
            p.id,
            'Crudo',
            'Suave corte de res, cebolla morada, pepinillo y ají verde en brunoise, cilantro, gajos de limón, tostadas y salsa de sour cream de la casa.',
            '$11.900',
            '/arbol/crudo.jpg',
            0
          FROM products p
          WHERE p.legacy_id = 'crudo'
          ON CONFLICT DO NOTHING
        ;


          INSERT INTO menu_highlights (
            location_id, 
            product_id,
            custom_name,
            custom_description,
            custom_price,
            custom_image,
            display_order
          )
          SELECT 
            'arbol',
            p.id,
            'Ceviche de Salmón',
            'Salmón, cebolla morada, manzanas verdes, paltas, pimentón, semilla de sésamo, cilantro, jengibre, sal, limón merquén, leche de tigre',
            '$6.900',
            '/arbol/ceviche.jpg',
            1
          FROM products p
          WHERE p.legacy_id = 'ceviche-salmon'
          ON CONFLICT DO NOTHING
        ;


          INSERT INTO menu_highlights (
            location_id, 
            product_id,
            custom_name,
            custom_description,
            custom_price,
            custom_image,
            display_order
          )
          SELECT 
            'arbol',
            p.id,
            'Pastel de Jaiba 500 grs',
            'Delicioso pastel de jaiba gratinado con queso mantecoso, preparado con la mejor jaiba fresca',
            '$12.500',
            'https://www.cocina-chilena.com/base/stock/Recipe/pastel-de-jaiba-chileno/pastel-de-jaiba-chileno_web.jpg.webp',
            2
          FROM products p
          WHERE p.legacy_id = 'pastel-jaiba-500'
          ON CONFLICT DO NOTHING
        ;


          INSERT INTO menu_highlights (
            location_id, 
            product_id,
            custom_name,
            custom_description,
            custom_price,
            custom_image,
            display_order
          )
          SELECT 
            '1898',
            p.id,
            'Chorrillana 1898',
            'Crujientes papas fritas con cubos de carne de res, pollo y longaniza, queso, huevos fritos y cebolla caramelizada',
            '$23.500',
            'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=400&fit=crop',
            0
          FROM products p
          WHERE p.legacy_id = 'chorrillana-1898'
          ON CONFLICT DO NOTHING
        ;


          INSERT INTO menu_highlights (
            location_id, 
            product_id,
            custom_name,
            custom_description,
            custom_price,
            custom_image,
            display_order
          )
          SELECT 
            '1898',
            p.id,
            'Pizza 1898',
            'Vacuno, pollo, tocino, salame, chorizo y tomate - Especialidad de la casa',
            '$17.900',
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop',
            1
          FROM products p
          WHERE p.legacy_id = 'pizza-1898'
          ON CONFLICT DO NOTHING
        ;


          INSERT INTO menu_highlights (
            location_id, 
            product_id,
            custom_name,
            custom_description,
            custom_price,
            custom_image,
            display_order
          )
          SELECT 
            '1898',
            p.id,
            'Churrasco 1898',
            'Carne de res, palta, tomate, lechuga, cebolla caramelizada y champiñones salteados',
            '$10.900',
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=400&fit=crop',
            2
          FROM products p
          WHERE p.legacy_id = 'churrasco-1898'
          ON CONFLICT DO NOTHING
        ;


          INSERT INTO menu_highlights (
            location_id, 
            product_id,
            custom_name,
            custom_description,
            custom_price,
            custom_image,
            display_order
          )
          SELECT 
            'capriccio',
            p.id,
            'Tabla de Fuego y Brasa',
            'Costillar, pollo al rostro y cerdo sobre papas rústicas con chimichurri casero - Ideal para 4 personas',
            '$28.990',
            '/capriccio/fuego.jpg',
            0
          FROM products p
          WHERE p.legacy_id = 'tabla-fuego-brasa'
          ON CONFLICT DO NOTHING
        ;


          INSERT INTO menu_highlights (
            location_id, 
            product_id,
            custom_name,
            custom_description,
            custom_price,
            custom_image,
            display_order
          )
          SELECT 
            'capriccio',
            p.id,
            'Ceviche del Pacífico',
            'Cubos de atún fresco marinados al estilo leche de tigre con cítricos y chips de plátano verde',
            '$16.990',
            '/capriccio/ceviche.jpg',
            1
          FROM products p
          WHERE p.legacy_id = 'ceviche-pacifico'
          ON CONFLICT DO NOTHING
        ;


          INSERT INTO menu_highlights (
            location_id, 
            product_id,
            custom_name,
            custom_description,
            custom_price,
            custom_image,
            display_order
          )
          SELECT 
            'capriccio',
            p.id,
            'Bruschetta Picante del Golfo',
            'Camarones ecuatorianos salteados con ají sobre patacón de plátano verde',
            '$9.990',
            '/capriccio/bruschetta.jpg',
            2
          FROM products p
          WHERE p.legacy_id = 'bruschetta-picante-golfo'
          ON CONFLICT DO NOTHING
        ;


    INSERT INTO admin_users (email, password_hash, name, role)
    VALUES ('admin@restaurant.com', '$2b$10$5aZ4PJwb7tzZFBESqf5eOeK/kTzqhKZBb0Jfdf5KFTVWMEgn3Mpri', 'Admin', 'admin')
    ON CONFLICT (email) DO NOTHING
  ;