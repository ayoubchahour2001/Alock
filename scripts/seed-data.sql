-- Seed data for Immigration Document Management Platform

-- Insert countries
INSERT INTO countries (name, code, flag_emoji) VALUES
('España', 'ES', '🇪🇸'),
('Marruecos', 'MA', '🇲🇦'),
('Rumania', 'RO', '🇷🇴'),
('Colombia', 'CO', '🇨🇴'),
('Ecuador', 'EC', '🇪🇨'),
('Perú', 'PE', '🇵🇪'),
('Argentina', 'AR', '🇦🇷'),
('Venezuela', 'VE', '🇻🇪'),
('Ucrania', 'UA', '🇺🇦'),
('China', 'CN', '🇨🇳'),
('Pakistán', 'PK', '🇵🇰');

-- Insert immigration purposes
INSERT INTO immigration_purposes (name, description) VALUES
('Estudios', 'Visa de estudiante para realizar estudios en España'),
('Trabajo', 'Permiso de trabajo y residencia'),
('Reagrupación Familiar', 'Reunificación con familiares residentes en España'),
('Residencia', 'Permiso de residencia general'),
('Asilo', 'Solicitud de protección internacional'),
('Inversión', 'Visa de inversionista o emprendedor'),
('Jubilación', 'Visa de jubilado o pensionista'),
('Otro', 'Otros propósitos de inmigración');

-- Insert document types
INSERT INTO document_types (name, description, is_required, validity_months) VALUES
('Pasaporte', 'Pasaporte válido con al menos 6 meses de vigencia', true, NULL),
('Certificado de Antecedentes Penales', 'Certificado apostillado del país de origen', true, 6),
('Contrato de Trabajo', 'Contrato firmado por el empleador español', true, NULL),
('Certificado Médico', 'Examen médico realizado en España', true, 3),
('Título Universitario', 'Título apostillado y traducido', true, NULL),
('Certificado de Idioma', 'Certificado DELE o SIELE', false, 24),
('Carta de Motivación', 'Carta explicando motivos de inmigración', false, NULL),
('Justificante de Medios Económicos', 'Prueba de solvencia económica', true, 3),
('Seguro Médico', 'Póliza de seguro médico válida en España', true, 12),
('Certificado de Matrimonio', 'Certificado apostillado de matrimonio', false, NULL),
('Certificado de Nacimiento', 'Certificado apostillado de nacimiento', false, NULL),
('Fotografías', 'Fotografías tamaño carnet recientes', true, NULL);

-- Insert offices
INSERT INTO offices (name, address, city, postal_code, phone, email, services, working_hours) VALUES
('Oficina de Extranjería Madrid Centro', 'Calle de la Montera, 15', 'Madrid', '28013', '+34 91 537 17 00', 'madrid.extranjeria@mir.es', 
 ARRAY['Visados', 'Permisos de Residencia', 'Reagrupación Familiar'], 
 '{"monday": "09:00-14:00", "tuesday": "09:00-14:00", "wednesday": "09:00-14:00", "thursday": "09:00-14:00", "friday": "09:00-14:00"}'),
('Comisaría de Policía Nacional Madrid', 'Calle de los Madrazo, 9', 'Madrid', '28014', '+34 91 322 15 60', 'madrid.policia@policia.es',
 ARRAY['NIE', 'Certificados', 'Denuncias'],
 '{"monday": "09:00-14:00,16:00-18:00", "tuesday": "09:00-14:00,16:00-18:00", "wednesday": "09:00-14:00,16:00-18:00", "thursday": "09:00-14:00,16:00-18:00", "friday": "09:00-14:00"}'),
('Oficina de Extranjería Barcelona', 'Passeig de Sant Joan, 189', 'Barcelona', '08037', '+34 93 520 41 00', 'barcelona.extranjeria@mir.es',
 ARRAY['Visados', 'Permisos de Residencia', 'Reagrupación Familiar'],
 '{"monday": "09:00-14:00", "tuesday": "09:00-14:00", "wednesday": "09:00-14:00", "thursday": "09:00-14:00", "friday": "09:00-14:00"}');

-- Insert document requirements for Colombia + Work purpose
INSERT INTO document_requirements (country_id, purpose_id, document_type_id, is_required, priority) VALUES
-- Colombia (id=4) + Trabajo (id=2)
(4, 2, 1, true, 1),  -- Pasaporte
(4, 2, 2, true, 1),  -- Antecedentes Penales
(4, 2, 3, true, 1),  -- Contrato de Trabajo
(4, 2, 4, true, 1),  -- Certificado Médico
(4, 2, 5, true, 2),  -- Título Universitario
(4, 2, 8, true, 2),  -- Medios Económicos
(4, 2, 9, true, 1),  -- Seguro Médico
(4, 2, 12, true, 3), -- Fotografías
(4, 2, 6, false, 3), -- Certificado de Idioma (opcional)
(4, 2, 7, false, 3); -- Carta de Motivación (opcional)

-- Insert document requirements for Morocco + Studies purpose
INSERT INTO document_requirements (country_id, purpose_id, document_type_id, is_required, priority) VALUES
-- Marruecos (id=2) + Estudios (id=1)
(2, 1, 1, true, 1),  -- Pasaporte
(2, 1, 2, true, 1),  -- Antecedentes Penales
(2, 1, 4, true, 1),  -- Certificado Médico
(2, 1, 5, true, 1),  -- Título Universitario
(2, 1, 8, true, 2),  -- Medios Económicos
(2, 1, 9, true, 1),  -- Seguro Médico
(2, 1, 12, true, 3), -- Fotografías
(2, 1, 6, true, 2),  -- Certificado de Idioma
(2, 1, 7, false, 3); -- Carta de Motivación (opcional)

-- Insert basic translations (Spanish)
INSERT INTO translations (key, language, value) VALUES
('welcome_message', 'es', 'Bienvenido a DocuSpain'),
('welcome_message', 'en', 'Welcome to DocuSpain'),
('welcome_message', 'ar', 'مرحبا بك في DocuSpain'),
('welcome_message', 'fr', 'Bienvenue à DocuSpain'),

('documents', 'es', 'Documentos'),
('documents', 'en', 'Documents'),
('documents', 'ar', 'الوثائق'),
('documents', 'fr', 'Documents'),

('
('documents', 'en', 'Documents'),
('documents', 'ar', 'الوثائق'),
('documents', 'fr', 'Documents'),

('appointments', 'es', 'Citas'),
('appointments', 'en', 'Appointments'),
('appointments', 'ar', 'المواعيد'),
('appointments', 'fr', 'Rendez-vous'),

('upload_document', 'es', 'Subir Documento'),
('upload_document', 'en', 'Upload Document'),
('upload_document', 'ar', 'رفع وثيقة'),
('upload_document', 'fr', 'Télécharger Document'),

('status_pending', 'es', 'Pendiente'),
('status_pending', 'en', 'Pending'),
('status_pending', 'ar', 'في الانتظار'),
('status_pending', 'fr', 'En attente'),

('status_completed', 'es', 'Completado'),
('status_completed', 'en', 'Completed'),
('status_completed', 'ar', 'مكتمل'),
('status_completed', 'fr', 'Terminé'),

('status_review', 'es', 'En Revisión'),
('status_review', 'en', 'Under Review'),
('status_review', 'ar', 'قيد المراجعة'),
('status_review', 'fr', 'En révision');

-- Create a sample user for testing
INSERT INTO users (email, password_hash, first_name, last_name, phone, nationality, immigration_purpose, preferred_language) VALUES
('maria.gonzalez@email.com', '$2b$10$example_hash', 'María', 'González', '+34 600 123 456', 'Colombia', 'Trabajo', 'es');

-- Insert sample notifications
INSERT INTO notifications (user_id, type, title, message, scheduled_for) VALUES
(1, 'reminder', 'Documento próximo a vencer', 'Tu Certificado de Antecedentes Penales vence en 30 días', NOW() + INTERVAL '30 days'),
(1, 'deadline', 'Fecha límite próxima', 'Debes subir tu Contrato de Trabajo antes del 20 de enero', '2024-01-18 09:00:00'),
(1, 'appointment', 'Recordatorio de cita', 'Tienes una cita en Extranjería mañana a las 10:30', '2024-01-24 09:00:00');
